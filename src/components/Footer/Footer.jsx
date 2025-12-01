import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Footer.css";
import logo from "../../assets/images/lollllllllll.png"; // replace with your small logo

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-links">
        <a href="/privacy-policy">{lang === "en" ? "Privacy Policy" : "プライバシーポリシー"}</a>
        <a href="/contact">{lang === "en" ? "Contact" : "お問い合わせ"}</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} {lang === "en" ? "Your Brand. All Rights Reserved." : "あなたのブランド。著作権所有。"}
      </div>
    </footer>
  );
};

export default Footer;
