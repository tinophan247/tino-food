import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../rtk/slices/authSlice";
import { Avatar } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AttributionIcon from "@mui/icons-material/Attribution";

function Header() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const userInfor = JSON.parse(localStorage.getItem("userInfor"));
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
    window.location.reload();
  };

  const activeClassname =
    "block py-2 pr-4 pl-3 text-white rounded bg-red-700 lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-white";
  const unactiveClassname =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";
  return (
    <header className="fixed top-0 w-full z-[999]">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-2xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="../src/assets/logo2.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-3xl text-red-500 font-bold whitespace-nowrap dark:text-white">
              Tino Food
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {token ? (
              <div className="flex items-center gap-5">
                <Avatar alt="avatar default" src={userInfor.avatar} />
                <p className="text-base font-semibold">
                  Hi {userInfor.firstname + " " + userInfor.lastName}
                </p>
                <Link to="/cart" className="cursor-pointer relative">
                  <ShoppingBagIcon />
                  <p className="text-white bg-red-700 rounded-full text-xs w-4 h-4 text-center font-semibold absolute top-0 right-[-20%]">
                    {cartList.length}
                  </p>
                </Link>
                {userInfor.isAdmin && (
                  <Link to="/dashboard">
                    <AttributionIcon />
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-gray-800 border border-gray-300 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log out
                </button>
              </div>
            ) : (
              <nav>
                <Link
                  to="/login"
                  className="text-gray-800 border border-gray-300 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                >
                  Sign up
                </Link>
              </nav>
            )}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClassname : unactiveClassname
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/pizza"
                  className={({ isActive }) =>
                    isActive ? activeClassname : unactiveClassname
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/order-tracking"
                  className={({ isActive }) =>
                    isActive ? activeClassname : unactiveClassname
                  }
                >
                  Order Tracking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
