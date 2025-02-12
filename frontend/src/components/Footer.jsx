// import React from 'react'
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="content">
            <div className="left-wrapper">
              <div className="name-and-icon">
                <a href="/">
                  <h1>BiteSwift</h1>
                </a>
              </div>
              <p>
                Jalan Semangka Raya, Telaga
                <br />
                Murni, Cikarang Barat, Kab, Bekasi
              </p>
              <div className="icons">
                <a href="#">
                  <img
                    src="/images/home/akar-icons_instagram-fill.png"
                    alt="Instagram"
                  />
                </a>
                <a href="#">
                  <img src="/images/home/bx_bxl-facebook.png" alt="Facebook" />
                </a>
                <a href="#">
                  <img
                    src="/images/home/akar-icons_twitter-fill.png"
                    alt="Twitter"
                  />
                </a>
              </div>
            </div>
            <div className="right-wrapper">
              <div className="company">
                <h5>Company</h5>
                <p>
                  <a href="#">About Us</a>
                </p>
                <p>
                  <a href="#">Career</a>
                </p>
                <p>
                  <a href="#how-it-works">How it works</a>
                </p>
              </div>
              <div className="policy">
                <h5>Policy</h5>
                <p>
                  <a href="#">FAQ</a>
                </p>
                <p>
                  <a href="#">Privacy</a>
                </p>
                <p>
                  <a href="#">Shipping</a>
                </p>
              </div>
              <div className="get-in-touch">
                <h5>Get In Touch</h5>
                <p>+62 896 7311 2766</p>
                <p>
                  <a href="#">food@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
            &copy; 2025 BiteSwift. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
