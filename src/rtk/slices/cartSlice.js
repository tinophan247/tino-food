import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartList: [],
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
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
