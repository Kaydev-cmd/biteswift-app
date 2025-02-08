import React from "react";
import { lazy, Suspense } from "react";

import "./Home.css";

// Lazy loading components for performance optimization
const Hero = lazy(() => import("../../components/Hero"));
const HiwCards = lazy(() => import("../../components/HiwCards"));
const MenuCards = lazy(() => import("../../components/MenuCards"));
const CustomersCards = lazy(() => import("../../components/CustomersCards"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
      <section className="menu" id="menu">
        <div className="container">
          <div className="content">
            <div className="text">
              <p>
                <span>Our menu</span>
              </p>
              <h3>Our Popular Menu</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit ut aliquam
              </p>
              <MenuCards />
              <div className="menu-btn">
                <button>More Menu</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customers" id="customers">
        <div className="container">
          <div className="content">
            <img src="/images/home/Group 7.png" alt="Food" className="banner" />
            <div className="right-wrapper">
              <div className="text">
                <p>
                  <span>What they say</span>
                </p>
                <h3>
                  What Our Customers Say
                  <br />
                  About us
                </h3>
              </div>
              <CustomersCards />
            </div>
          </div>
        </div>
      </section>
      <section className="discount">
        <div className="container">
          <div className="content">
            <p>
              Join our members and get
              <br />a discount of up to 50%
            </p>
            <button>Sign Up</button>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Home;
