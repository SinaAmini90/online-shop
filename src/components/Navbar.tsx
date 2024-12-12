import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <NavLink to="/" className="mr-4">
        Home
      </NavLink>
      <NavLink to="/cart">Cart ({cartItemsCount})</NavLink>
    </nav>
  );
};

export default Navbar;
