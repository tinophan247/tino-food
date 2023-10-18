import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";

function LeftSidebar() {
  const activeClassname ="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-red-500 to-red-700";
  const unactiveClassname ="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group";

  return (
    <div
      id="sideNav"
      className="lg:block hidden bg-white w-[20%] rounded-none border-none mt-14"
    >
      <div className="p-4 space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? activeClassname : unactiveClassname
          }
        >
          <DashboardIcon />
          <span className="-mr-1 font-medium">Dashboard</span>
        </NavLink>
        <NavLink
          to="/user-management"
          className={({ isActive }) =>
            isActive ? activeClassname : unactiveClassname
          }
        >
          <PersonIcon />
          <span className="-mr-1 font-medium">User Managment</span>
        </NavLink>
        <NavLink
          to="/product-management"
          className={({ isActive }) =>
            isActive ? activeClassname : unactiveClassname
          }
        >
          <BadgeIcon />
          <span className="-mr-1 font-medium">Product Managment</span>
        </NavLink>
        <Link to="/" className={unactiveClassname}>
          <HomeIcon />
          <span className="-mr-1 font-medium">Home Page</span>
        </Link>
      </div>
    </div>
  );
}

export default LeftSidebar;
