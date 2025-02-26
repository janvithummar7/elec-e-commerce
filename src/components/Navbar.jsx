import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX, FiUser, FiShoppingBag 
} from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const userMenuPaths = ["/account", "/orders", "/cancellations", "/reviews", "/logout"];
  const isUserActive = userMenuPaths.includes(location.pathname);
  const isWishlistActive = location.pathname === "/wishlist";
  const isCartActive = location.pathname === "/cart";

  return (
    <nav className="flex items-center justify-between px-20 py-4 shadow-md bg-white relative">
      <div className="text-2xl font-bold text-black">Exclusive</div>

      <ul className="hidden md:flex space-x-12 text-black font-medium">
        {[
          { path: "/", label: "Home" },
          { path: "/contact", label: "Contact" },
          { path: "/about", label: "About" },
          { path: "/signup", label: "Sign Up" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className="flex items-center space-x-2 px-3 py-2 rounded-md transition"
            >
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center space-x-4 relative">
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <input type="text" placeholder="What are you looking for?" className="bg-transparent outline-none text-sm w-48" />
          <FiSearch className="text-gray-500" />
        </div>

        <button
          onClick={() => navigate("/wishlist")}
          className={`p-3 rounded-full transition ${isWishlistActive ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
        >
          <FiHeart className="text-2xl" />
        </button>

        <button
          onClick={() => navigate("/cart")}
          className={`p-3 rounded-full transition ${isCartActive ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
        >
          <FiShoppingCart className="text-2xl" />
        </button>

        <div
          className="relative group"
          onMouseEnter={() => setIsUserMenuOpen(true)}
          onMouseLeave={() => setIsUserMenuOpen(false)}
        >
          <button
            className={`p-3 rounded-full transition ${
              isUserMenuOpen || isUserActive ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"
            }`}
          >
            <FiUser className="text-2xl" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 w-64 bg-white shadow-lg rounded-lg p-3 z-10 backdrop-blur-md bg-black/5">
              {[
                { path: "/account", label: "Manage My Account", Icon: FiUser },
                { path: "/orders", label: "My Orders", Icon: FiShoppingBag },
                { path: "/cancellations", label: "My Cancellations", Icon: ImCancelCircle },
                { path: "/reviews", label: "My Reviews", Icon: FaRegStar },
                { path: "/logout", label: "Logout", Icon: CiLogout, textClass: "text-red-500" },
              ].map(({ path, label, Icon, textClass }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition ${textClass || ""}`}
                >
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-5 flex flex-col items-center space-y-4 md:hidden">
          {[
            { path: "/", label: "Home" },
            { path: "/contact", label: "Contact" },
            { path: "/about", label: "About" },
            { path: "/signup", label: "Sign Up" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 text-lg px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition"
            >
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
