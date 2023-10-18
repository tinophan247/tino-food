import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";
import { notification } from "../../utils/helper";

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

export const getListUser = createAsyncThunk("getListUser", async () => {
  const res = await axios.get("http://localhost:4000/users");
  return res.data
})

export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
  const res = await axios.delete(`http://localhost:4000/users/${userId}`);
  return res
})

function createToken(userObj, privateKey) {
  return CryptoJS.AES.encrypt(JSON.stringify(userObj), privateKey).toString();
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    userData: [],
    isError: false,
    message: "",
    isLogin : false
  },
  reducers : {
    logout : (state) => {
      state.isLogin = false;
      localStorage.clear();
    }
  } ,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Error ";
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
        notification("Email or Password was wrong",'error');
      } else {
        //mã hóa dữ liệu
        let token = createToken(user, "keycheck");
        //lưu token trong local storage
        localStorage.setItem("token", token);
        localStorage.setItem("userInfor", JSON.stringify(user));
        state.isLogin = true
        notification("Login Success");
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Error";
    });
    builder.addCase(getListUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListUser.fulfilled, (state,action) => {
      state.isLoading = false;
      state.userData = [...action.payload];
    });
    builder.addCase(getListUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Error";
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Error";
    });
  },
});

export const {logout} = authSlice.actions
export default authSlice.reducer;
