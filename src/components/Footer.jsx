import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <p className="mt-2 text-gray-400">Subscribe</p>
          <p className="text-gray-400">Get 10% off your first order</p>
          <div className="mt-3 flex items-center border border-gray-400 rounded-lg overflow-hidden">
            <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full bg-black outline-none text-white"
            />
            <button className="px-3 py-2 flex items-center justify-center">
                <VscSend className="text-white text-lg" />
            </button>
        </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="text-gray-400 mt-2">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-gray-400">exclusive@gmail.com</p>
          <p className="text-gray-400">+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Download App</h3>
          <p className="text-gray-400">Save $3 with App New User Only</p>
          <div className="mt-3 flex space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-28"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="w-28"
            />
          </div>
          <div className="mt-4 flex space-x-4 text-xl">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
