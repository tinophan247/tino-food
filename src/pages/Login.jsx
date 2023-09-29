import { Link, useNavigate } from "react-router-dom";
import Pagelayout from "../components/Pagelayout";
import TextFields from "../components/TextField/TextField";
import Check from "../components/Checkbox/Checkbox";
import * as yup from "yup";
import { useFormik } from "formik";

function Login() {
  const navigate =useNavigate();
  const validationSchema = yup.object({
    email: yup.string().required("Chưa nhập email").email('Chưa nhập đúng định dạng email'),
    password: yup.string().required("Chưa nhập password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert('Đăng nhập thành công');
      navigate('/')
      console.log(values)
    },
  });

  return (
    <Pagelayout>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
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
                    error={formik.touched.email && Boolean(formik.errors.email) }
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
                    helperText={formik.touched.password && formik.errors.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
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
                  <a href="#" className="text-xs font-semibold text-purple-700">
                    Forgot password?
                  </a>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                  >
                    Sign in
                  </button>
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    />
                    Sign in with Google
                  </button>
                </div>
              </form>
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Dont have account?
                </span>
                <Link
                  to="/register"
                  className="text-xs font-semibold text-purple-700"
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
