import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <FaInstagram size={30} />, link: "#" },
    { id: 2, icon: <FaFacebook size={30} />, link: "#" },
    { id: 3, icon: <FaTwitter size={30} />, link: "#" },
  ];

  const companyLinks = [
    {
      text: "About us",
      link: "#",
    },
    {
      text: "Career",
      link: "#",
    },
    {
      text: "How it works",
      link: "#how-it-works",
    },
  ];

  const policyLinks = [
    {
      text: "FAQs",
      link: "#",
    },
    {
      text: "Privacy",
      link: "#",
    },
    {
      text: "Shipping",
      link: "#",
    },
  ];

  return (
    <>
      <div className="footer" id="contact">
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
                {socialLinks.map(({ id, icon, link }) => (
                  <a key={id} href={link} aria-label="Social Media Link">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="right-wrapper">
              <div className="company">
                <h5>Company</h5>
                {companyLinks.map(({ text, link }) => (
                  <p key={text}>
                    <a href={link}>{text}</a>
                  </p>
                ))}
              </div>
              <div className="policy">
                <h5>Policy</h5>
                {policyLinks.map(({ text, link }) => (
                  <p key={text}>
                    <a href={link}>{text}</a>
                  </p>
                ))}
              </div>
              <div className="get-in-touch">
                <h5>Get In Touch</h5>
                <p>+62 896 7311 2766</p>
                <p>
                  <a href="mailto:food@example.com">food@example.com</a>
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
