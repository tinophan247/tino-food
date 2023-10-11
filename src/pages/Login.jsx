import { Link, useNavigate } from "react-router-dom";
import Pagelayout from "../components/Pagelayout";
import TextFields from "../components/TextField/TextField";
import Check from "../components/Checkbox/Checkbox";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../rtk/slices/authSlice";
import { useEffect, useState } from "react";
import LoginGoogle from "../components/LoginGoogle";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const [tokenLogin, setTokenLogin] = useState(null);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Chưa nhập email")
      .email("Chưa nhập đúng định dạng email"),
    password: yup.string().required("Chưa nhập password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );
      setTokenLogin(localStorage.getItem("token"));
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenLogin(token);
  }, [tokenLogin]);

  return (
    <Pagelayout>
      {(isLogin || tokenLogin) && navigate("/")}
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 bgLogin">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: "24rem", height: "32rem" }}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">
                Welcome back to Tino Food
              </h1>
              <form onSubmit={formik.handleSubmit} className="mt-4">
                <div className="mb-5">
                  <TextFields
                    name="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    required={true}
                    helperText={formik.touched.email && formik.errors.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    width="299px"
                  />
                </div>
                <div className="mb-5">
                  <TextFields
                    name="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    required={true}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    width="299px"
                  />
                </div>
                <div className="mb-3 flex flex-wrap content-center items-center">
                  <Check />
                  <label
                    htmlFor="remember"
                    className="mr-auto text-xs font-semibold"
                  >
                    Remember
                  </label>
                  <a href="#" className="text-xs font-semibold text-red-700">
                    Forgot password?
                  </a>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-900 px-2 py-1.5 rounded-md"
                  >
                    Sign in
                  </button>
                  <LoginGoogle/>
                </div>
              </form>
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Dont have account?
                </span>
                <Link
                  to="/register"
                  className="text-xs font-semibold text-red-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap content-center justify-center rounded-r-md"
            style={{ width: "24rem", height: "32rem" }}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src="https://peasandcrayons.com/wp-content/uploads/2012/10/homemade-sushi-tutorial-recipe-peas-and-crayons-1250.jpg"
            />
          </div>
        </div>
      </div>
    </Pagelayout>
  );
}

export default Login;
