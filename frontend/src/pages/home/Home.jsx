// import React from 'react'
import { Hero } from "../../components/Hero";
import HiwCards from "../../components/HiwCards";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Hero />
      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="content">
            <div className="text">
              <p>
                <span>How it works</span>
              </p>
              <h3>What We Serve</h3>
              <p>
                Product Quality Is Our Priority, And Always Guarantees
                <br />
                Halal And Safety Until It Is In Your Hands.
              </p>
            </div>
            <HiwCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
