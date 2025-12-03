import React, { useContext, useRef, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Navbar.css";
import logoImage from "../../assets/images/WhatsApp_Image_2025-12-03_at_03.21.58_68c1f83b-removebg-preview.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const logoRef = useRef(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    const onDone = () => {
      el.classList.add("revealed");
    };

    // Listen for the global event dispatched when katana animation finishes
    window.addEventListener("katana:done", onDone);

    // Fallback: reveal after 1.5s if event never fires
    const t = setTimeout(onDone, 1500);

    return () => {
      window.removeEventListener("katana:done", onDone);
      clearTimeout(t);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="ロゴ" className="logo-img" ref={logoRef} />
          </Link>
        </div>

       {/*  <ul className="nav-links">
          <li><a href="#top">{lang === "en" ? "Top" : "トップ"}</a></li>
          <li><a href="/shop">{lang === "en" ? "Shop" : "ショップ"}</a></li>
        </ul>
 */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {lang === "en" ? "日本語" : "English"}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

