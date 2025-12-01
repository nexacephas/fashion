import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Navbar.css";
import logoImage from "../../assets/images/lollllllllll.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="ロゴ" className="logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><a href="#top">{lang === "en" ? "Top" : "トップ"}</a></li>
          <li><a href="/shop">{lang === "en" ? "Shop" : "ショップ"}</a></li>
        </ul>

        <button className="lang-toggle" onClick={toggleLanguage}>
          {lang === "en" ? "日本語" : "English"}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
