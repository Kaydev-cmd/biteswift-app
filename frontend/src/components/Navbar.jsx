// Work on cart count feature
// Work on sign in feature

import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose, IoSearch } from "react-icons/io5";
import { FaCartShopping, FaLessThanEqual } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);

    // Delay adding the event listener to avoid immediately closing the search bar
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/cart");
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dummy Food Items list
  const foodMenu = [
    "Cheese Burger",
    "Pepperoni Pizza",
    "Chicken Wrap",
    "Vegan Salad",
    "BBQ Ribs",
    "Pasta Carbonara",
    "Chocolate Cake",
    "Mango Smoothie",
  ];

  // Filter food items based on search query
  const filterdItems = foodMenu.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  {["Home", "Menu", "How it Works", "About", "Contact"].map(
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

            {/* Search Input Field */}
            {isSearchOpen && (
              <div
                className={`search-container ${isSearchOpen ? "open" : ""}`}
                ref={searchRef}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />

                {/* Display Filtered Menu Items */}
                {searchQuery && (
                  <ul className="search-results">
                    {filterdItems.length > 0 ? (
                      filterdItems.map((item, index) => (
                        <li key={item} className="search-result-item">
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="search-result-item no-results">
                        No results found
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )}

            {/* Icons and Sign-in Button */}
            <div className="icons-and-btn">
              <button className="search-btn" onClick={toggleSearch}>
                <IconContext.Provider
                  value={{ color: "#000", className: "searchIcon" }}
                >
                  <IoSearch size={24} />
                </IconContext.Provider>
              </button>
              <button className="cart-btn" onClick={handleButtonClick}>
                <IconContext.Provider
                  value={{ color: "#000", className: "cartIcon" }}
                >
                  <FaCartShopping size={20} />
                </IconContext.Provider>
              </button>
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
                {["Home", "Menu", "How it Works", "About", "Contact"].map(
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
