import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import "./MenuCards.css";

export const MenuCards = ({ items }) => {
  const [favorites, setFavorites] = useState({});

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <>
      <div className="content-cards">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="card" key={item.id}>
              <div className="upper-wrapper">
                <img
                  src={item.image || "/images/home/unsplash_G6wx5j5-dR8.png"}
                  alt={item.name}
                />
              </div>
              <div className="lower-wrapper">
                <div className="card-text">
                  <h3>{item.name}</h3>
                  <p>{item.description || "Delicious and fresh!"}</p>
                </div>
                <div className="price-and-icon">
                  <p>R{item.price.toFixed(2)}</p>
                  <IconContext.Provider value={{ className: "heartIcon" }}>
                    <button
                      className="favorite-btn"
                      onClick={() => toggleFavorite(item.id)}
                    >
                      <FaHeart
                        size={20}
                        color={favorites[item.id] ? "red" : "#1d1d1d"}
                      />
                    </button>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="loading">No menu items available.</p>
        )}
      </div>
    </>
  );
};

// Prop Validation
MenuCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MenuCards;
