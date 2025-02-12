import React from "react";
import { lazy, Suspense, useState, useEffect, useMemo } from "react";

import "./Home.css";

// Lazy loading components for performance optimization
const Hero = lazy(() => import("../../components/Hero"));
const HiwCards = lazy(() => import("../../components/HiwCards"));
const MenuCards = lazy(() => import("../../components/MenuCards"));
const CustomersCards = lazy(() => import("../../components/CustomersCards"));

const Home = () => {
  // State for menu items and loading status
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  // Fetch menu items (simulating API call)
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://api.example.com/menu");
        const data = await res.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Memoized filtered menu items
  const displayedMenu = useMemo(() => {
    return showMore ? menuItems : menuItems.slice(0, 4);
  }, [menuItems, showMore]);

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
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
                Getting your favorite meals delivered has never been this easy!
                <br />
                With just a few taps, you can browse, order, and track your food
                <br />
                in real time. Whether you're craving something quick or planning
                <br />a feast, we ensure a smooth and hassle-free experience
                from start to finish.
              </p>
            </div>
            <HiwCards />
          </div>
        </div>
      </section>

      {/* Menu Section with Dynamic Data */}
      <section className="menu" id="menu">
        <div className="container">
          <div className="content">
            <div className="text">
              <p>
                <span>Our menu</span>
              </p>
              <h3>Our Popular Menu</h3>
              <p>Fresh & delicious options, updated regularly.</p>
            </div>
            {loading ? (
              <p className="loading">Loading menu...</p>
            ) : (
              <>
                <MenuCards items={displayedMenu} />
                <div className="menu-btn">
                  <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show Less" : "More Menu"}
                  </button>
                </div>
              </>
            )}
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
            <button onClick={() => alert("Sign-up form coming soon!!")}>
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Home;
