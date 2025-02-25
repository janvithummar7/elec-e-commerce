import React from "react";
import { WishlistData } from "../data/wishlist";
import { FiTrash, FiShoppingCart, FiEye } from "react-icons/fi"; // Icons

const Wishlist = () => {
  return (
    <div className="m-18">
      {/* Wishlist Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Wishlist (4)</h2>
        <button className="border border-black text-black text-sm px-6 py-2 rounded-sm">
          Move All to Bag
        </button>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-4 gap-6">
        {WishlistData.slice(0, 4).map((product) => (
          <div key={product.id} className="relative bg-white shadow-md rounded-lg p-4">
            
            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                -{product.discount}%
              </span>
            )}

            {/* Trash Icon (Delete) */}
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FiTrash className="text-gray-500" />
            </button>

            {/* Product Image */}
            <div className="flex justify-center py-6">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
            </div>

            {/* "Add to Cart" Section */}
            <div className="bg-black text-white p-2 flex items-center justify-center gap-2 cursor-pointer">
              <FiShoppingCart />
              <span>Add to Cart</span>
            </div>

            {/* Product Name & Price */}
            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-red-500 font-bold">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-500 line-through text-sm">{product.oldPrice}</p>
              )}
            </div>

            {/* Star Ratings */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {"⭐".repeat(product.rating)}
              <span className="text-gray-500 ml-1">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      {/* "Just for You" Section */}
      <div className="flex justify-between items-center mt-10 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-6 bg-red-500 rounded"></span>
          <h2 className="text-xl font-semibold">Just For You</h2>
        </div>
        <button className="border border-black text-black text-sm px-6 py-2 rounded-sm">
          See All
        </button>
      </div>

      {/* Recommended Products */}
      <div className="grid grid-cols-4 gap-6">
        {WishlistData.slice(4, 8).map((product) => (
          <div key={product.id} className="relative bg-white shadow-md rounded-lg p-4">
            
            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                -{product.discount}%
              </span>
            )}

            {/* New Product Badge */}
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                NEW
              </span>
            )}

            {/* Eye Icon for Preview */}
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FiEye className="text-gray-500" />
            </button>

            {/* Product Image */}
            <div className="flex justify-center py-6">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
            </div>

            {/* "Add to Cart" Section */}
            <div className="bg-black text-white p-2 flex items-center justify-center gap-2 cursor-pointer">
              <FiShoppingCart />
              <span>Add to Cart</span>
            </div>

            {/* Product Name & Price */}
            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-red-500 font-bold">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-500 line-through text-sm">{product.oldPrice}</p>
              )}
            </div>

            {/* Star Ratings */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {"⭐".repeat(product.rating)}
              <span className="text-gray-500 ml-1">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
