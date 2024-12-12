import React from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
const ProductItem: React.FC<Product> = ({
  id,
  image,
  title,
  description,
  price,
  category,
}) => {
  return (
    <div
      key={id}
      className="flex flex-col justify-between border p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <section>
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-contain mb-4"
        />
        <h3 className="text-base font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      </section>
      <section className="flex justify-between items-center">
        <p className="font-semibold ">price ${price}</p>
        <button className="bg-blue-500 text-white py-2 px-4 w-fit rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </section>
    </div>
  );
};
export default ProductItem;
