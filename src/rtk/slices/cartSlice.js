import { createSlice } from "@reduxjs/toolkit";
import { notification } from "../../utils/helper";
const cartList = JSON.parse(localStorage.getItem("cart")) || []

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartList: [...cartList],
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {
    addCart: (state, action) => {
      //Tìm kiếm xem sản phẩm có tồn tại hay không
      let index = state.cartList.findIndex((x) => x.id == action.payload.id);
      //hàm findIndex nếu có thì trả về cái vị trí thành phần đó trong mảng, nếu không trả về -1
      if (index !== -1) {
        //tăng số lượng nếu sp đã có
        state.cartList[index].quantity += 1
      } else {
        //thêm mới sp
        state.cartList.push(action.payload);
      }
      //cập nhật lại giỏ hàng
      state.cartList = [...state.cartList];
      localStorage.setItem("cart",JSON.stringify(state.cartList))
      notification('Add Product Success')
    },
    increase: (state, action) => {
      //Tìm kiếm xem sản phẩm có tồn tại hay không
      let index = state.cartList.findIndex((x) => x.id == action.payload.id);
      if (index !== -1) {
        //tăng số lượng nếu sp đã có
        state.cartList[index].quantity += 1
      }
      //cập nhật lại giỏ hàng
      state.cartList = [...state.cartList];
      localStorage.setItem("cart",JSON.stringify(state.cartList))
    },
    decrease: (state, action) => {
      //Tìm kiếm xem sản phẩm có tồn tại hay không
      let index = state.cartList.findIndex((x) => x.id == action.payload.id);
      if (index !== -1) {
        //tăng số lượng nếu sp đã có
        state.cartList[index].quantity -= 1
      }
      //cập nhật lại giỏ hàng
      state.cartList = [...state.cartList];
      localStorage.setItem("cart",JSON.stringify(state.cartList))
    },
    removeCart: (state, action) => {
      //Tìm kiếm xem sản phẩm có tồn tại hay không
      let index = state.cartList.findIndex((x) => x.id == action.payload.id);
      if (index !== -1) {
        //Xóa đối tượng
        state.cartList.splice(index,1)
      }
      //Cập nhật lại giỏ hàng
      state.cartList = [...state.cartList];
      localStorage.setItem("cart",JSON.stringify(state.cartList))
      notification('Remove Product Success')
    }

  },
});

export const { addCart, increase, decrease ,removeCart} = cartSlice.actions;
export default cartSlice.reducer;
