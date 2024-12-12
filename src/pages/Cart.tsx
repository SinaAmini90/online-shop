import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeItem, updateQuantity } from "../redux/cartSlice";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

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
              <tr>
                <th className="border-b py-2">Product</th>
                <th className="border-b py-2">Price</th>
                <th className="border-b py-2">Quantity</th>
                <th className="border-b py-2">Total</th>
                <th className="border-b py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-2">{item.title}</td>
                  <td className="py-2">${item.price.toFixed(2)}</td>
                  <td className="py-2">
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      className="w-16 text-center border"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td className="py-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
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
