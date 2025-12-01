import React from "react";
import "./Footer.css";
import logo from "../../assets/images/lollllllllll.png"; // replace with your small logo

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
