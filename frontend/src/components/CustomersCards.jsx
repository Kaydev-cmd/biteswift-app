import React, { useState } from "react";
import "./CustomersCards.css";

const customerReviews = [
  {
    id: 1,
    name: "Naura Silva",
    image: "/images/home/unsplash_Xbe20Z_DlDs.png",
    rating: "/images/home/Stars.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "/images/home/unsplash_Xbe20Z_DlDs.png",
    rating: "/images/home/Stars.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
];

export const CustomersCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + customerReviews.length) % customerReviews.length
    );
  };

  const { name, image, rating, review } = customerReviews[currentIndex];

  return (
    <>
      <div className="content-cards">
        <div className="card">
          <div className="upper-wrapper">
            <img
              src={image}
              alt={`${name}'s profile`}
              className="profile-pic"
            />
            <div className="name-and-rating">
              <h4>{name}</h4>
              <img src={rating} alt="Ratings" />
            </div>
          </div>
          <p>&#34;{review}&#34;</p>
          <div className="navigation">
            <button onClick={prevReview}>&larr;</button>
            <button onClick={nextReview}>&rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersCards;
