import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { CartData } from "../data/cart"; // Import cart data

const Cart = () => {
  // Initialize cart state with imported data
  const [cartItems, setCartItems] = useState(CartData);

  // Update quantity
  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="m-18">
      <p className="text-gray-500 text-sm mb-10">Home / <span className="text-black">Cart</span></p>

      {/* Cart Table */}
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <table className="w-full">
          <thead>
            <tr className="border-b" >
              <th className="text-left pb-4">Product</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Quantity</th>
              <th className="pb-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="flex items-center gap-4 py-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover" />
                  {item.name}
                  <button onClick={() => removeItem(item.id)} className="text-red-500 ml-2">
                    <FiTrash />
                  </button>
                </td>
                <td className="text-center">${item.price}</td>
                <td className="text-center">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="text-center">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mb-6">
        <button className="border border-black px-6 py-2 text-sm">Return To Shop</button>
        <button className="border border-black px-6 py-2 text-sm">Update Cart</button>
      </div>

      {/* Coupon & Cart Total Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Coupon Code */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded">Apply Coupon</button>
        </div>

        {/* Cart Total */}
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between border-b pb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Shipping:</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between font-semibold py-2">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="bg-red-500 text-white w-full py-3 mt-4 rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
