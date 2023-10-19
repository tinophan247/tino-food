import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListProduct = createAsyncThunk("getListProduct", async () => {
  const res = await axios.get(import.meta.env.VITE_API_URL + "products");
  return res.data;
});

export const deleteProduct = createAsyncThunk("deleteProduct", async (productId) => {
  const res = await axios.delete(import.meta.env.VITE_API_URL + `products/` + productId);
  return res
})

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    productList: [],
    isSuccess: false,
    isError: false,
    message: "",
    favor : [],
    seafood : [],
    kid : [],
    traditional : [],
    chicken : [],
    pasta : [],
    sausage : [],
    bread : [],
    potato : [],
    dessert : [],
    drinks : []
  },
  extraReducers: (builder) => {
    builder.addCase(getListProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = [...action.payload];
      state.favor = [...action.payload].filter(x => x.category == 'favor')
      state.seafood = [...action.payload].filter(x => x.category == 'seafood')
      state.kid = [...action.payload].filter(x => x.category == 'kid')
      state.traditional = [...action.payload].filter(x => x.category == 'traditional')
      state.chicken = [...action.payload].filter(x => x.category == 'chicken')
      state.pasta = [...action.payload].filter(x => x.category == 'pasta')
      state.sausage = [...action.payload].filter(x => x.category == 'sausage')
      state.bread = [...action.payload].filter(x => x.category == 'bread')
      state.potato = [...action.payload].filter(x => x.category == 'potato')
      state.dessert = [...action.payload].filter(x => x.category == 'dessert')
      state.drinks = [...action.payload].filter(x => x.category == 'drinks')
    });
    builder.addCase(getListProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Lỗi";
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Error";
    });
  },
});

export default productSlice.reducer;
