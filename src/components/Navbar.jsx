import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-black">Exclusive</div>
      <ul className="hidden md:flex space-x-6 text-black font-medium">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none text-sm w-48"
          />
          <FiSearch className="text-gray-500" />
        </div>
        <FiHeart
        className="text-2xl text-black cursor-pointer"
        onClick={() => navigate("/wishlist")} // Navigate to Wishlist
      />
        <FiShoppingCart className="text-2xl text-black cursor-pointer" 
        onClick={() => navigate("/cart")}
        />
      </div>

      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-5 flex flex-col items-center space-y-4 md:hidden">
          <Link to="/" className="text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/contact" className="text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/about" className="text-lg" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/signup" className="text-lg" onClick={() => setIsOpen(false)}>Sign Up</Link>
          {/* <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-3/4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-full"
            />
            <FiSearch className="text-gray-500" />
          </div> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
