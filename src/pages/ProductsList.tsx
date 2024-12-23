import React, { useState, useMemo } from "react";
import { useAppSelector } from "../redux/hooks";
import Products from "../components/Products";
import ErrorModual from "../components/Error";
import Loading from "../components/Loading";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
interface AppState {
  products: {
    products: Product[];
    loading: boolean;
    error: string | null;
  };
}
const ProductsList: React.FC = () => {
  const { products, loading, error } = useAppSelector(
    (state: AppState) => state.products
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchedStuff, setSearchedStuff] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? products.filter((product: Product) =>
          product.title.toLowerCase().includes(searchedStuff.toLowerCase())
        )
      : products.filter(
          (product: Product) =>
            product.category === selectedCategory &&
            product.title.toLowerCase().includes(searchedStuff.toLowerCase())
        );
  }, [selectedCategory, products, searchedStuff]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorModual message={error}>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Try Again
        </button>
      </ErrorModual>
    );
  }

  return (
    <div className="m-5">
      <div className="flex flex-col sm:gap-4 gap-0 sm:flex-row">
        <div className="flex items-center border sm:w-1/3 w-full p-2 rounded-2xl mb-4">
          <i className="fa fa-search text-gray-500 mr-2"></i>
          <input
            type="text"
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

      {filteredProducts.length === 0 && searchedStuff.length !== 0 ? (
        <p className="text-center text-xl mt-5">No results were found!</p>
      ) : (
        <Products products={filteredProducts} />
      )}
    </div>
  );
};

export default ProductsList;
