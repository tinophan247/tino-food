import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";

export const register = createAsyncThunk("register", async (newUser) => {
  const res = await axios.post("http://localhost:4000/users", newUser);
  return res;
});

export const login = createAsyncThunk("login", async (inforLogin) => {
  const res = await axios.get("http://localhost:4000/users");
  return {
    users: res.data,
    inforLogin: inforLogin,
  };
});

function createToken(userObj, privateKey) {
  return CryptoJS.AES.encrypt(JSON.stringify(userObj), privateKey).toString();
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    userData: [],
    isSuccess: false,
    isError: false,
    message: "",
    isLogin : ""
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = "Đăng ký thành công";
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Lỗi";
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      //tìm xem tài khoản có tồn tại hay không
      let user = action.payload.users.find(
        (user) =>
          user.email === action.payload.inforLogin.email &&
          user.password === action.payload.inforLogin.password
      );
      // kiểm tra đăng nhập
      if (!user) {
        alert("Tài khoản hoặc mật khẩu không đúng");
      } else {
        //mã hóa dữ liệu
        let token = createToken(user, "keycheck");
        //luuw token trong local storage
        localStorage.setItem("token", token);
        localStorage.setItem("userInfor", JSON.stringify(user));
        state.isLogin = token
        alert("Đăng nhập thành công");
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Lỗi";
    });
  },
});

export default authSlice.reducer;
