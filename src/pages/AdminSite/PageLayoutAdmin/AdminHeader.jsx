import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../rtk/slices/authSlice";

function AdminHeader() {
  const userInfor = JSON.parse(localStorage.getItem("userInfor"));
  const dispatch = useDispatch();
  const navigate =useNavigate();
  
  const handleLogout = () => {
    navigate("/login");
    dispatch(logout());
    window.location.reload();
  }

  return (
    <div>
      <header className="fixed top-0 w-full z-[999]">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-2xl">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/dashboard" className="flex items-center">
              <img
                src="../src/assets/logo2.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-3xl text-red-500 font-bold whitespace-nowrap dark:text-white">
                Tino Food Admin
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <div className="flex items-center gap-5">
                <Avatar alt="avatar default" src={userInfor.avatar} />
                <p className="text-base font-semibold">
                  Hi {userInfor.firstname + " " + userInfor.lastName}
                </p>
                <button onClick={handleLogout} className="text-gray-800 border border-gray-300 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default AdminHeader;
