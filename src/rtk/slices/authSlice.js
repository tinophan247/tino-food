import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const register = createAsyncThunk("register", async (newUser) => {
    const res = await axios.post('http://localhost:4000/users',newUser);
    return res;
});

const authSlice = createSlice({
    name : 'auth',
    initialState :{
        isLoading: false,
        userData : [],
        isSuccess : false,
        isError : false,
        message : ''
    },
    extraReducers : (builder)=> {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(register.fulfilled, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = 'Đăng ký thành công'
        })
        builder.addCase(register.rejected,(state) => {
            state.isLoading = false;
            state.isError = true;
            state.message = 'Lỗi'
        })
    }
}) 

export default authSlice.reducer