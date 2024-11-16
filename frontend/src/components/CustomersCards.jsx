// import React from 'react'
import "./CustomersCards.css";

export const CustomersCards = () => {
  return (
    <>
      <div className="content-cards">
        <div className="card">
          <div className="upper-wrapper">
            <img
              src="/images/home/unsplash_Xbe20Z_DlDs.png"
              alt="A girl"
              className="profile-pic"
            />
            <div className="name-and-rating">
              <h4>Naura Silvana</h4>
              <img src="/images/home/Stars.png" alt="Ratings" />
            </div>
          </div>
          <p>
            &#34;“Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit ut aliquam, purus sit amet luctus
            <br />
            venenatis.”&#34;
          </p>
        </div>
      </div>
    </>
  );
};
