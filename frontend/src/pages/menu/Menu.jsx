import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import MenuCards from "../../components/MenuCards";
import "./Menu.css";

const categories = ["All", "Debonairs Pizza", "Romans Pizza", "Spur"];

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://api.example.com/menu");
        const data = await res.json();
        setMenuItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  // Handle filtering
  const handleFilter = (category) => {
    selectedCategory(category);
    if (category === "All") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <>
      <section className="menu-page">
        <div className="menu-text">
          <h1>Menu</h1>
          <p>Browse your favorite dish from our selected restuarants</p>
        </div>
        <div className="container">
          <div className="content">
            {/* Category Filters */}
            <div className="filters-and-btn">
              <div className="filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => handleFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button className="filter-btn">
                <FaFilter />
                Default
              </button>
            </div>
          </div>

          <div className="menu-container">
            {filteredItems.length > 0 ? (
              filteredItems.map(() => (
                <MenuCards key={item.id} items={[item]} />
              ))
            ) : (
              <p className="loading">No menu items available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
