import React from "react";
import ProductItem from "./Product";
import Loading from "./Loading";

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
    return <Loading />;
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
