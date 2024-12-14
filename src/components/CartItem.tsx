import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/cartSlice";
import { RootState } from "../redux/store";

const CartItem: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrease = (item: {
    id: number;
    title: string;
    price: number;
    description: string;
  }) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  const handleDecrease = (id: number) => {
    const quantity = cartItems.find((item) => item.id === id)!.quantity;
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: -1 }));
    } else {
      dispatch(removeItem(id));
    }
  };
  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {cartItems.map((item, index) => (
        <tr
          className={`border-b ${index % 2 === 0 ? "" : "bg-zinc-100"}`}
          key={item.id}
        >
          <td className="py-2 text-center hidden md:table-cell ">
            {index + 1}
          </td>
          <td className="py-2">{item.title}</td>
          <td className="py-2 px-5 hidden md:table-cell">{item.description}</td>
          <td className="py-2 text-center">
            <button
              onClick={() => handleDecrease(item.id)}
              className="items-center justify-center text-white bg-red-700 h-6 w-6 rounded-full hover:bg-gray-400"
            >
              -
            </button>
          </td>
          <td className="py-2 text-center">
            <span className="text-center m-2">{item.quantity}</span>
          </td>
          <td className="py-2 text-center">
            <button
              onClick={() => handleIncrease(item)}
              className="items-center justify-center text-white bg-blue-700 h-6 w-6 rounded-full hover:bg-gray-400"
            >
              +
            </button>
          </td>
          <td className="py-2 text-center">${item.price.toFixed(2)}</td>
          <td className="py-2 text-center">
            ${(item.quantity * item.price).toFixed(2)}
          </td>
          <td className="py-2 text-center">
            <i
              onClick={() => handleRemove(item.id)}
              className="fa fa-trash bg-red-600 p-2 rounded-full text-white text-sm"
            ></i>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItem;
