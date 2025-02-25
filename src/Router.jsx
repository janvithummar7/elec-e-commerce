import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./components/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

const AppRouter = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
