import { Link } from "react-router-dom";
import Pagelayout from "../../components/Pagelayout";
import OrderTrackingItem from "./OrderTrackingItem";
import moment from "moment";

function OrderTracking() {
  const history = JSON.parse(localStorage.getItem("history")) ?? [];

  return (
    <Pagelayout>
      <div className="mt-32 px-32">
        <p className="text-3xl font-bold">Order History</p>
        <p className="mt-3">Check the status of recent orders</p>
        {history.length > 0 &&
          history.map((item) => (
            <div key={item.id}>
              <div className="w-full h-24 bg-gray-50 mt-10 p-5 flex justify-between">
                <div className="flex gap-20 items-center">
                  <div>
                    <p className="text-base font-semibold">Date placed</p>
                    <p>{moment(item.dateplaced).format('LL')}</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold">Order number</p>
                    <p>{item.id}</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold">Total amount</p>
                    <p>${item.totalPrice}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Link to={`/order-tracking-details/${item.id}`}>
                    <button className="w-28 h-10 bg-white border border-gray-300 rounded-md">
                      View Detail
                    </button>
                  </Link>
                  <button className="w-28 h-10 bg-white border border-gray-300 rounded-md">
                    View Invoice
                  </button>
                </div>
              </div>
              <div>
                {item.cart.length > 0 &&
                  item.cart.map((cartItem, index) => (
                    <OrderTrackingItem key={index} cartItem={cartItem} />
                  ))}
              </div>
            </div>
          ))}
        {history.length === 0 && (
          <div className="relative">
            <div className="flex justify-center -mt-20">
              <img
                src="https://cdn.dribbble.com/users/357929/screenshots/2276751/orderup-emptystate-sadbag.png"
                alt="nothing"
              />
            </div>
            <p className="font-bold text-3xl text-center absolute top-[80%] left-[37%]">Nothing in order history</p>
          </div>
        )}
      </div>
    </Pagelayout>
  );
}

export default OrderTracking