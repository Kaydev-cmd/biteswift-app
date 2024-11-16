// import React from 'react'
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import "./MenuCards.css";

export const MenuCards = () => {
  return (
    <>
      <div className="content-cards">
        <div className="card">
          <div className="upper-wrapper">
            <img src="/images/home/unsplash_G6wx5j5-dR8.png" alt="Food" />
          </div>
          <div className="lower-wrapper">
            <div className="text">
              <h3>Mie Ramen</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="price-and-icon">
              <p>R50.00</p>
              <IconContext.Provider
                value={{ color: "#1d1d1d", className: "heartIcon" }}
              >
                <FaHeart size={20} />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper-wrapper">
            <img src="/images/home/unsplash_zBONkjGFGko.png" alt="Food" />
          </div>
          <div className="lower-wrapper">
            <div className="text">
              <h3>Salad Tahu</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="price-and-icon">
              <p>R50.00</p>
              <IconContext.Provider
                value={{ color: "#1d1d1d", className: "heartIcon" }}
              >
                <FaHeart size={20} />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper-wrapper">
            <img src="/images/home/unsplash_SqYmTDQYMjo.png" alt="Food" />
          </div>
          <div className="lower-wrapper">
            <div className="text">
              <h3>Roti Bakar</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="price-and-icon">
              <p>R50.00</p>
              <IconContext.Provider
                value={{ color: "#1d1d1d", className: "heartIcon" }}
              >
                <FaHeart size={20} />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper-wrapper">
            <img src="/images/home/unsplash_vg2p2BK57bY.png" alt="Food" />
          </div>
          <div className="lower-wrapper">
            <div className="text">
              <h3>Spaghetti</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="price-and-icon">
              <p>R50.00</p>
              <IconContext.Provider
                value={{ color: "#1d1d1d", className: "heartIcon" }}
              >
                <FaHeart size={20} />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
