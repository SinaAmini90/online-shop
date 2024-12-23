import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/hooks";
import { fetchUser } from "../redux/profileActions";
import { fetchProducts } from "../redux/productsActions";

const Navbar: React.FC = () => {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const profileName = useSelector(
    (state: RootState) => state.profile.user?.name.firstname || "Guest"
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchProducts());
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white relative">
      <NavLink to="/user-details" className="my-auto w-4/12">
        <p className="text-center border-2 rounded-full w-8 h-8 mr-2 inline-flex justify-center items-center">
          <i className="fa fa-user"></i>
        </p>
        Hi, {profileName}
      </NavLink>
      <p
        className="text-5xl font-bold w-4/12 text-center"
        style={{
          fontFamily: "'Pacifico', cursive",
          background: "linear-gradient(to right, #ffff5f, #feb47b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        online shop
      </p>

      <div className="hidden md:inline my-auto space-x-4 w-4/12 text-right">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-300 font-bold"
              : "text-white hover:text-orange-300"
          }
          to="/cart"
        >
          {cartItemsCount > 0 ? cartItemsCount : ""} Cart
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-300 font-bold"
              : "text-white hover:text-orange-300"
          }
          to="/products-list"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-300 font-bold"
              : "text-white hover:text-orange-300"
          }
          to="/"
        >
          Home
        </NavLink>
      </div>

      <div className="md:hidden my-auto w-4/12 text-right">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <i className="fa fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-full bg-gray-700 md:hidden">
          <ul className="flex flex-col items-center p-4 space-y-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-bold"
                  : "text-white hover:text-orange-300"
              }
              to="/cart"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {cartItemsCount > 0 ? cartItemsCount : ""} Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-bold"
                  : "text-white hover:text-orange-300"
              }
              to="/products-list"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-bold"
                  : "text-white hover:text-orange-300"
              }
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
