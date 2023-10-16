import { useParams } from "react-router";
import Pagelayout from "../../components/Pagelayout";
import moment from "moment";
import OrderTrackingItem from "./OrderTrackingItem";
import { Avatar } from "@mui/material";

const OrderTrackingDetail = () => {
  const { id } = useParams();
  const historyItem = JSON.parse(localStorage.getItem("history"));
  const userInfor = JSON.parse(localStorage.getItem("userInfor"));
  const filterItem = historyItem.filter((item) => item.id == id);

  return (
    <Pagelayout>
      {filterItem.length > 0 &&
        filterItem.map((item) => (
          <div
            key={item.id}
            className="mt-12 py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto"
          >
            <div className="flex justify-start item-start space-y-2 flex-col ">
              <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
                Order #{item.id}
              </h1>
              <p className="text-base font-medium leading-6 text-gray-600">
                {moment(item.dateplaced).format("LLL")}
              </p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                  <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                    Customer Cart
                  </p>
                  <div>
                    {item.cart.length > 0 &&
                      item.cart.map((cartItem, index) => (
                        <OrderTrackingItem key={index} cartItem={cartItem} />
                      ))}
                  </div>
                </div>
                <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">
                      Summary
                    </h3>
                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                      <div className="flex justify-between  w-full">
                        <p className="text-base leading-4 text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base leading-4 text-gray-600">
                          ${item.totalPrice}
                        </p>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">
                          Discount
                        </p>
                        <p className="text-base leading-4 text-gray-600">
                          -$0 (0%)
                        </p>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base leading-4 text-gray-600">$0</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base font-semibold leading-4 text-gray-800">
                        Total
                      </p>
                      <p className="text-base font-semibold leading-4 text-gray-600">
                        ${item.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Customer
                </h3>
                <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                  <div className="flex flex-col justify-start items-start flex-shrink-0">
                    <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                      <Avatar alt="avatar default" src={userInfor.avatar} />
                      <div className=" flex justify-start items-start flex-col space-y-2">
                        <p className="text-base font-semibold leading-4 text-left text-gray-800">
                          {item.firstname + " " + item.lastname}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                          stroke="#1F2937"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 7L12 13L21 7"
                          stroke="#1F2937"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="cursor-pointer text-sm leading-5 text-gray-800">
                        {item.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                      <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                        <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                          Shipping Address
                        </p>
                        <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                          {item.address}, {item.ward}, {item.district}, {item.province}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Pagelayout>
  );
};

export default OrderTrackingDetail;
