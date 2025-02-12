import React from "react";
import "./HiwCards.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
export const HiwCards = () => {
  const cardsData = [
    {
      image: "/images/home/order 1.png",
      title: "Browse the Menu",
      description:
        "Explore a wide range of mouthwatering dishes, from local favorites to global cuisine",
    },
    {
      image: "/images/home/delivery 1.png",
      title: "Place Your Order",
      description:
        "Choose your meal, customize it just the way you like, and hit the 'Order Now' button!",
    },
    {
      image: "/images/home/courier 1.png",
      title: "Track Your Delivery",
      description:
        "Sit back, relax, and watch your order come to life! Real-time tracking ensures your food is always on the way.",
    },
  ];
  return (
    <div className="content-cards">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default HiwCards;
