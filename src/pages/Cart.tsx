import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-zinc-300">
                <th className="py-2 w-[5%] hidden md:table-cell">#</th>
                <th className="py-2 w-[25%]">Title</th>
                <th className="py-2 w-[35%] hidden md:table-cell">
                  Description
                </th>
                <th className="py-2 w-[1%]"></th>
                <th className="py-2 w-[1%]">Qty</th>
                <th className="py-2 w-[1%]"></th>
                <th className="py-2 w-[10%]">Price</th>
                <th className="py-2 w-[10%]">Total</th>
                <th className="py-2 w-[1%]"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr
                  className={`"border-b " ${
                    index % 2 === 0 ? "" : "bg-zinc-100"
                  }`}
                  key={item.id}
                >
                  <td className="py-2 text-center hidden md:table-cell">
                    {index + 1}
                  </td>
                  <td className="py-2 ">{item.title}</td>
                  <td className="py-2 px-5 hidden md:table-cell">
                    {item.description}
                  </td>
                  <td className="py-2 text-center">
                    <button className=" items-center justify-center text-white bg-red-700 h-6 w-6 rounded-full hover:bg-gray-400">
                      -
                    </button>
                  </td>
                  <td className="py-2 text-center">
                    <span className="text-center m-2">{item.quantity}</span>
                  </td>
                  <td className="py-2 text-center">
                    <button className=" items-center justify-center text-white bg-blue-700 h-6 w-6 rounded-full hover:bg-gray-400">
                      +
                    </button>
                  </td>

                  <td className="py-2 text-center">${item.price.toFixed(2)}</td>
                  <td className="py-2 text-center">
                    {(item.quantity * item.price).toFixed(2)}
                  </td>
                  <td className="py-2 text-center">
                    <i className="fa fa-trash bg-red-700 p-2 rounded-full text-white"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
