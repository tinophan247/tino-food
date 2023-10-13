import { useDispatch, useSelector } from "react-redux";
import Pagelayout from "../../components/Pagelayout";
import CartItem from "../Cart/CartItem";
import { decrease, increase, removeCart } from "../../rtk/slices/cartSlice";
import { useNavigate } from "react-router";
import TextFields from "../../components/TextField/TextField";
import { useEffect, useState } from "react";
import SingleSelect from "../../components/Dropdown/SingleSelect";
import {
  apiGetPublicDistricts,
  apiGetPublicProvinces,
  apiGetPublicWards,
} from "../../services/apiLocation";
import * as yup from "yup";
import { useFormik } from "formik";
import moment from "moment";

function Checkout() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [formState ,setFormState] = useState({
    province : 0,
    district : 0,
    ward : 0
  });
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = JSON.parse(localStorage.getItem("userInfor")).email;
  const history = JSON.parse(localStorage.getItem("history")) ?? [];

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
  }, []);

  useEffect(()=> {
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistricts(formState.province);
      if (response.status === 200) {
        setDistricts(response?.data.results);
      }
    };
    formState.province !== 0 && fetchPublicDistrict();
  },[formState.province])

  useEffect(()=> {
    const fetchPublicWard = async () => {
      const response = await apiGetPublicWards(formState.district);
      if (response.status === 200) {
        setWards(response?.data.results);
      }
    };
    formState.district && fetchPublicWard();
  },[formState.district])

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

  const randomId = () => {
    return Math.floor(Math.random()*99999)
  }


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object({
    email: yup.string().required("Please enter email").email("Invalid email"),
    firstname: yup.string().required("Please enter first name"),
    lastname: yup.string().required("Please enter last name"),
    address: yup.string().required("Please enter address"),
    phone: yup.string().required("Please enter phone number").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long")
  });

  const formik = useFormik({
    initialValues: {
      email: userEmail,
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newData = {
        id : randomId(),
        email : values.email,
        firstname : values.firstname,
        lastname : values.lastname,
        province : formState.province,
        district : formState.district,
        ward : formState.ward,
        address : values.address,
        phone: values.phone,
        cart : [...cartList],
        totalPrice : totalPrice,
        dateplaced : moment().format('LL')
      }
      alert("Đặt hàng thành công");
      localStorage.setItem("history",JSON.stringify([...history,newData]));
      localStorage.removeItem("cart");
      navigate("/");
      window.location.reload();
    },
  });

  return (
    <Pagelayout>
      {cartList.length === 0 && navigate("/")}
      <form
        onSubmit={formik.handleSubmit}
        className="mt-20 flex  mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-auto"
      >
        <div className="w-3/5 p-5">
          <p className="font-semibold text-base">Contact Information</p>
          <TextFields
            name="Email address"
            type="email"
            required={true}
            width="600px"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            helperText={
              formik.touched.email && formik.errors.email
            }
            error={
              formik.touched.email && Boolean(formik.errors.email)
            }
          />
          <p className="font-semibold text-base mt-5">Shipping Information</p>
          <div className="flex gap-5">
            <TextFields
              name="First Name"
              required={true}
              width="290px"
              value={formik.values.firstname}
              onChange={formik.handleChange("firstname")}
              helperText={
                formik.touched.firstname && formik.errors.firstname
              }
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
            />
            <TextFields
              name="Last Name"
              required={true}
              width="290px"
              value={formik.values.lastname}
              onChange={formik.handleChange("lastname")}
              helperText={
                formik.touched.lastname && formik.errors.lastname
              }
              error={
                formik.touched.lastname && Boolean(formik.errors.lastname)
              }
            />
          </div>
          <div className="flex gap-5">
            <SingleSelect
              name="Province/City"
              width="290px"
              options={convertDataProvince(provinces)}
              required={true}
              value={formState.province}
              onChange={(e) => setFormState({...formState,province : e.target.value})}
            />
            <SingleSelect
              name="District"
              width="290px"
              options={convertDataDistrict(districts)}
              required={true}
              value={formState.district}
              onChange={(e) => setFormState({...formState,district : e.target.value})}
            />
          </div>
          <div className="flex gap-5">
            <SingleSelect
              name="Ward/Commune"
              width="290px"
              options={convertDataWard(wards)}
              required={true}
              value={formState.ward}
              onChange={(e) => setFormState({...formState,ward : e.target.value})}
            />
            <TextFields
              name="Address"
              required={true}
              width="290px"
              value={formik.values.address}
              onChange={formik.handleChange("address")}
              helperText={
                formik.touched.address && formik.errors.address
              }
              error={
                formik.touched.address && Boolean(formik.errors.address)
              }
            />
          </div>
          <TextFields
            name="Phone"
            type="phone"
            required={true}
            width="600px"
            value={formik.values.phone}
            onChange={formik.handleChange("phone")}
            helperText={
              formik.touched.phone && formik.errors.phone
            }
            error={
              formik.touched.phone && Boolean(formik.errors.phone)
            }
          />
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
