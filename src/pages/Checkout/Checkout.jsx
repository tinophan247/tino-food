import { useDispatch, useSelector } from "react-redux";
import Pagelayout from "../../components/Pagelayout";
import CartItem from "../Cart/CartItem";
import { decrease, increase, removeCart } from "../../rtk/slices/cartSlice";
import { useNavigate } from "react-router";
import TextFields from "../../components/TextField/TextField";
import { useEffect, useState } from "react";
import SingleSelect from "../../components/Dropdown/SingleSelect";
import { apiGetPublicDistricts, apiGetPublicProvinces, apiGetPublicWards } from "../../services/apiLocation";

function Checkout() {
  const userEmail = JSON.parse(localStorage.getItem("userInfor")).email;
  const [email, setEmail] = useState(userEmail);
  const [provinces,setProvinces] = useState([]);
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([]);
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(districts)
console.log(wards)


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

  const totalPrice = cartList.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

useEffect(() => {
  const fetchPublicProvince = async () => {
    const response = await apiGetPublicProvinces();
    if (response.status === 200) {
      setProvinces(response?.data.results);
    }
  };
  fetchPublicProvince();

  const fetchPublicDistrict = async () => {
    const response = await apiGetPublicDistricts(92);
    if (response.status === 200) {
      setDistricts(response?.data.results);
    }
  }
  fetchPublicDistrict()
  

  const fetchPublicWard = async () => {
    const response = await apiGetPublicWards(925);
    if (response.status === 200) {
      setWards(response?.data.results);
    }
  }
  fetchPublicWard();
}, [])


const convertDataProvince = (array) => {
  const ProvinceList = array.map((item) => ({
    value: item.province_id,
    label: item.province_name,
  }));
  return ProvinceList;
};

const convertDataDistrict = (array) => {
  const DistrictList = array.map((item) => ({
    value: item.district_id,
    label: item.district_name,
  }));
  return DistrictList;
};

const convertDataWard = (array) => {
  const WardList = array.map((item) => ({
    value: item.ward_id,
    label: item.ward_name,
  }));
  return WardList;
};

  return (
    <Pagelayout>
      {cartList.length === 0 && navigate("/")}
      <form className="mt-20 flex  mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-auto">
        <div className="w-3/5 p-5">
          <p className="font-semibold text-base">Contact Information</p>
          <TextFields
            name="Email address"
            type="email"
            required={true}
            width="600px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="font-semibold text-base mt-5">Shipping Information</p>
          <div className="flex gap-5">
            <TextFields name="First Name" required={true} width="290px" />
            <TextFields name="Last Name" required={true} width="290px" />
          </div>
          <div className="flex gap-5">
            <SingleSelect
              name="Province/City"
              width="290px"
              options={convertDataProvince(provinces)}
              required={true}
            />
            <SingleSelect
              name="District"
              width="290px"
              options={convertDataDistrict(districts)}
              required={true}
            />
          </div>
          <div className="flex gap-5">
            <SingleSelect
              name="Ward/Commune"
              width="290px"
              options={convertDataWard(wards)}
              required={true}
            />
            <TextFields name="Address" required={true} width="290px" />
          </div>
          <TextFields name="Phone" type="phone" required={true} width="600px" />
        </div>
        <div className="w-2/5 p-5">
          <p className="font-semibold text-base">Order Sumary</p>
          <div>
            <div className="rounded-lg mt-5">
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
            <div className="bg-white p-2 ">
              <div className="flex justify-between">
                <p className="font-medium">Subtotal</p>
                <p>${totalPrice}</p>
              </div>
              <div className="flex justify-between mt-3">
                <p className="font-medium">Shipping</p>
                <p>$0</p>
              </div>
              <div className="flex justify-between mt-3 font-semibold">
                <p>Total</p>
                <p>${totalPrice}</p>
              </div>
            </div>
            <button
              type="submit"
              className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-900 px-2 py-1.5 rounded-md mt-5"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
    </Pagelayout>
  );
}

export default Checkout;
