import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Main.css";

const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <div className="layout">
        <Navbar cartItems={cartItems} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
