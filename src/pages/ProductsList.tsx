import React, { useEffect, useState, useMemo } from "react";
import Products from "../components/Products";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchedStuff, setSearchedStuff] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Added error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong while fetching products.");
        }
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchedStuff.toLowerCase())
        )
      : products.filter(
          (product) =>
            product.category === selectedCategory &&
            product.title.toLowerCase().includes(searchedStuff.toLowerCase())
        );
  }, [selectedCategory, products, searchedStuff]);

  useEffect(() => {}, [searchedStuff]);
  if (error) {
    return (
      <>
        <div className="flex flex-col items-center justify-center p-4 bg-red-100 rounded-lg shadow-md w-full sm:w-1/2 mx-auto">
          <p className="text-red-600 font-semibold text-lg mb-4">
            Error: {error}
          </p>
          <button
            onClick={() => {
              setError(null);
              window.location.reload();
            }}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            Try Again
          </button>
        </div>
      </>
    );
  }
  console.log("first");
  return (
    <div className="m-5">
      <div className="flex flex-col sm:gap-4 gap-0 sm:flex-row">
        <div className="flex items-center border sm:w-1/3 w-full p-2 rounded-2xl mb-4">
          <i className="fa fa-search text-gray-500 mr-2"></i>
          <input
            type="text"
            id="search"
            value={searchedStuff}
            onChange={(event) => setSearchedStuff(event.target.value)}
            placeholder="Search..."
            className="outline-none"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="border-b sm:w-1/3 w-full p-2 mb-4"
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men&apos;s Clothing</option>
          <option value="women's clothing">Women&apos;s Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <Products products={filteredProducts} />
    </div>
  );
};

export default ProductsList;
