import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/products-list");
  };
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <section className="px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Your One-Stop Shop
        </h2>
        <p className="text-gray-600 mt-4">
          Explore our collection of amazing products and get started today!
        </p>
        <button
          onClick={handleClickButton}
          className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
        >
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
