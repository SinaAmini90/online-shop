import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addItem, updateQuantity, removeItem } from "../redux/cartSlice";
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
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ id, title, price, description, quantity: 1 }));
  };
  const handleRemoveFromCart = (id: number) => {
    const quantity = cartItems.find((item) => item.id === id)!.quantity;
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: -1 }));
    } else {
      dispatch(removeItem(id));
    }
    // dispatch(updateQuantity({ id, quantity: -1 }));
  };

  const productQuantity =
    cartItems.find((item) => item.id === id)?.quantity || 0;
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

        {productQuantity > 0 ? (
          <div className="flex justify-between items-center w-32 h-10">
            <button
              onClick={() => handleRemoveFromCart(id)}
              className="bg-gray-300 text-gray-700 px-2 py-1 w-10 rounded hover:bg-gray-400"
            >
              -
            </button>
            <span className="font-bold text-gray-800">{productQuantity}</span>
            <button
              onClick={handleAddToCart}
              className="bg-gray-300 text-gray-700 px-2 py-1 w-10 rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white py-2 px-4 w-32 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        )}
      </section>
    </div>
  );
};
export default ProductItem;
