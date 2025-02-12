import { useState } from "react";
import { IconContext } from "react-icons";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose, IoSearch } from "react-icons/io5";
import { FaCartShopping, FaLessThanEqual } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { Link } from "react-scroll";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="content">
            <div className="header">
              <a href="/">
                <h1>BiteSwift</h1>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="links">
              <nav>
                <ul>
                  {["Home", "Menu", "How it works", "About", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          to={item.toLowerCase().replace(/\s/g, "-")}
                          smooth={true}
                          duration={500}
                          offset={-70}
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            {/* Icons and Sign-in Button */}
            <div className="icons-and-btn">
              <a href="#search">
                <IconContext.Provider
                  value={{ color: "#000", className: "searchIcon" }}
                >
                  <IoSearch size={24} />
                </IconContext.Provider>
              </a>
              <a href="#cart">
                <IconContext.Provider
                  value={{ color: "#000", className: "cartIcon" }}
                >
                  <FaCartShopping size={20} />
                </IconContext.Provider>
              </a>
              <button className="sign-in-btn">
                <PiSignInBold size={20} />
                Sign in
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <HiOutlineMenuAlt3
              className="menu-icon"
              size={30}
              color="#ffcb45"
              onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
              <button className="close-btn" onClick={toggleMenu}>
                <IoClose size={30} color="#fff" />
              </button>
              <ul>
                {["Home", "Menu", "How it works", "About", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to={item.toLowerCase().replace(/\s/g, "-")}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={toggleMenu}
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
