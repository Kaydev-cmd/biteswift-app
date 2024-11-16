// Work on dropdown menu using useState Hook

// import React from 'react'
import { IconContext } from "react-icons";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="content">
            <div className="header">
              <a href="">
                <h1>Let&#39;sFood</h1>
                <img src="/images/home/food 2.png" alt="Food" />
              </a>
            </div>
            <div className="links">
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#menu">Menu</a>
                  </li>
                  <li>
                    <a href="#how-it-works">How it works</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="icons-and-btn">
              <a href="">
                <IconContext.Provider
                  value={{ color: "#000", className: "searchIcon" }}
                >
                  <IoSearch size={24} />
                </IconContext.Provider>
              </a>
              <a href="">
                <IconContext.Provider
                  value={{ color: "#000", className: "cartIcon" }}
                >
                  <FaCartShopping size={20} />
                </IconContext.Provider>
              </a>
              <button>
                <PiSignInBold size={20} />
                Sign in
              </button>
            </div>
            <HiOutlineMenuAlt3 className="menu" size={30} color="#ffcb45" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
