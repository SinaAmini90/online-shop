import React from "react";
import ProductItem from "./Product";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductsProps {
  products: ProductProps[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin border-4 rounded-full border-blue-500 border-t-transparent w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default Products;
