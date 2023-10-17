import { Link, NavLink } from "react-router-dom";

function LeftSidebar() {
  return (
    <div className="w-[15%] h-screen border-r border-black mt-16 bg-red-50">
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "text-red-700" : "text-black")}
      >
        <div className="h-10 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
          Dashboard
        </div>
      </NavLink>
      <NavLink
        to="/user-management"
        className={({ isActive }) => (isActive ? "text-red-700" : "text-black")}
      >
        <div className="h-10 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
          User Management
        </div>
      </NavLink>
      <NavLink
        to="/product-management"
        className={({ isActive }) => (isActive ? "text-red-700" : "text-black")}
      >
        <div className="h-10 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
          Product Management
        </div>
      </NavLink>
      <Link to="/">
        <div className="h-10 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
          Home Page
        </div>
      </Link>
    </div>
  );
}

export default LeftSidebar;
