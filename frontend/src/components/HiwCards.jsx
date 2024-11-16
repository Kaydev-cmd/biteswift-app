// import React from 'react'
import "./HiwCards.css";

export const HiwCards = () => {
  return (
    <div className="content-cards">
      <div className="card">
        <img src="/images/home/order 1.png" alt="Order" />
        <h4>Easy To Order</h4>
        <p>
          You only order through
          <br />
          the app
        </p>
      </div>
      <div className="card">
        <img src="/images/home/delivery 1.png" alt="Order" />
        <h4>Fastest Delivery</h4>
        <p>
          Delivery will be on
          <br />
          time
        </p>
      </div>
      <div className="card">
        <img src="/images/home/courier 1.png" alt="Order" />
        <h4>Best Quality</h4>
        <p>
          The best quality of food
          <br />
          for you
        </p>
      </div>
    </div>
  );
};

export default HiwCards;
