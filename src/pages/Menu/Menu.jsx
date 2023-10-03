import {  NavLink, Outlet } from "react-router-dom";
import Pagelayout from "../../components/Pagelayout";

function Menu() {
  return (
    <Pagelayout>
      <nav className="w-full bg-slate-300 h-10 flex justify-around items-center font-semibold">
        <NavLink
          to="discount"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Discount
        </NavLink>
        <NavLink
          to="pizza"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Pizza
        </NavLink>
        <NavLink
          to="sides"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Side dish
        </NavLink>
        <NavLink
          to="dessert"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Dessert
        </NavLink>
        <NavLink
          to="drinks"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Drinks
        </NavLink>
      </nav>
      <Outlet />
    </Pagelayout>
  );
}

export default Menu;
