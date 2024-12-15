import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const profileName = useSelector(
    (state: RootState) => state.profile.user?.name.firstname || "Guest"
  );

  return (
    <nav className="flex justify-between align-middle p-4 bg-gray-800 text-white">
      <div className="my-auto w-3/12">
        <p className="text-center border-2 rounded-full w-8 h-8 mr-2 inline-flex justify-center items-center">
          <i className="fa fa-user"></i>
        </p>
        hi, {profileName}
      </div>
      <p
        className="text-5xl font-bold w-6/12 text-center "
        style={{
          fontFamily: "'Pacifico', cursive",
          background: "linear-gradient(to right, #ffff5f, #feb47b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        online shop
      </p>

      <div className="my-auto space-x-2 w-3/12 text-right">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-300 font-bold "
              : "text-white hover:text-orange-300"
          }
          to="/cart"
        >
          ({cartItemsCount}) Cart
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-300 font-bold "
              : "text-white hover:text-orange-300"
          }
          to="/products-list"
        >
          products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-300 font-bold "
              : "text-white hover:text-orange-300"
          }
          to="/"
        >
          Home
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
