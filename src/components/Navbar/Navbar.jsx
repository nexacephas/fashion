import React from "react";
import "./Navbar.css";
import logoImage from "../../assets/images/lollllllllll.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src={logoImage} alt="logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          <li><a href="#top">TOP</a></li>
          <li><a href="/shop">SHOP</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
