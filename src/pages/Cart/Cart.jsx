import { useDispatch, useSelector } from "react-redux";
import Pagelayout from "../../components/Pagelayout";
import CartItem from "./CartItem";
import { decrease, increase, removeCart } from "../../rtk/slices/cartSlice";
import { useNavigate } from "react-router";
import { notification } from "../../utils/helper";

function Cart() {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleIncrease = (item) => {
    dispatch(increase(item));
  };

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeCart(item));
    } else {
      dispatch(decrease(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeCart(item));
  };

  const totalPrice = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity ,0)

  const handleCheckout = () => {
    if(cartList.length !== 0 ) {
      navigate('/checkout')
    } else {
      notification('Nothing in your cart. Please add something!!!','question')
      navigate('/')
    }
  }

  return (
    <Pagelayout>
      <div className="h-auto bg-[#F8F8F8] pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartList.length > 0 &&
              cartList.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleRemove={() => handleRemove(item)}
                  handleIncrease={() => handleIncrease(item)}
                  handleDecrease={() => handleDecrease(item)}
                />
              ))}
            {cartList.length == 0 && (
              <img src="../src/assets/empty_cart.png" alt="not-found" />
            )}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sticky top-[10%]">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$0</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold">${totalPrice} USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button onClick={handleCheckout} className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-red-50 hover:bg-red-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </Pagelayout>
  );
}

export default Cart;
