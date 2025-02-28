import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX, FiUser, FiShoppingBag 
} from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useUser } from "../contexts/UserContext";


const Navbar = () => {
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const userMenuPaths = ["/account", "/orders", "/cancellations", "/reviews", "/logout"];
  const isUserActive = userMenuPaths.includes(location.pathname);
  const isWishlistActive = location.pathname === "/wishlist";
  const isCartActive = location.pathname === "/cart";

  const [notifications, setNotifications] = useState({
    wishlistCount: isWishlistActive ? 0: 4,
    cartCount: isCartActive ? 0 : 2,
  });

  const moreMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

  return (
    <nav className="flex items-center justify-between px-20 py-4 shadow-md bg-white relative">
      <div className="text-2xl font-bold text-black">Exclusive</div>

      <ul className="hidden md:flex space-x-12 text-black font-medium">
        {[
          { path: "/", label: "Home" },
          { path: "/contact", label: "Contact" },
          { path: "/about", label: "About" },
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
        {!user && 
          <li key="/signup">
              <Link
                to="/signup"
                className="flex items-center space-x-2 px-3 py-2 rounded-md transition"
              >
                <span>Sign Up</span>
              </Link>
          </li>
        }
        {user &&
          <li key='/more' className="relative" ref={moreMenuRef}>
            <button
              onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-md transition"
            >
              <span>More</span>
            </button>
            {isMoreMenuOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3 z-10 backdrop-blur-md bg-black/5">
                <ul className="space-y-4">
                  {[
                    "Woman’s Fashion",
                    "Men’s Fashion",
                    "Electronics",
                    "Home & Lifestyle",
                    "Medicine",
                    "Sports & Outdoor",
                    "Baby’s & Toys",
                    "Groceries & Pets",
                    "Health & Beauty",
                  ].map((category, index) => (
                    <li key={index} className="flex justify-between items-center text-gray-600 cursor-pointer hover:text-black">
                      {category} <span className="text-lg">›</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        }
      </ul>

      <div className="hidden md:flex items-center space-x-2 relative">
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <input type="text" placeholder="What are you looking for?" className="bg-transparent outline-none text-sm w-48" />
          <FiSearch className="text-gray-500" />
        </div>
        {user && ( 
          <>
            <div className="relative">
              <button
                onClick={() => {
                  navigate("/wishlist")
                  setNotifications({wishlistCount: 0, cartCount: notifications.cartCount})
                }}
                className={`p-3 rounded-full transition hover:bg-red-500 hover:text-white relative ${isWishlistActive ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
              >
                <FiHeart className="text-2xl" />
              </button>
              {notifications.wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {notifications.wishlistCount}
                </span>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  navigate("/cart")
                  setNotifications({cartCount: 0, wishlistCount: notifications.wishlistCount})
                }}
                className={`p-3 rounded-full transition hover:bg-red-500 hover:text-white relative ${isCartActive ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
              >
                <FiShoppingCart className="text-2xl" />
              </button>
              {notifications.cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {notifications.cartCount}
                </span>
              )}
            </div>

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
                    { path: "/logout", label: "Logout", Icon: CiLogout, textClass: "text-red-500", onClick: {logout} },
                  ].map(({ path, label, Icon, textClass, onClick }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={onClick}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition ${textClass || ""}`}
                    >
                      <Icon className="text-xl" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
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
