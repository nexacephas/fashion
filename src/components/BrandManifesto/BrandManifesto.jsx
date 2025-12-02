import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./BrandManifesto.css";

const BrandStatement = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="brand-statement" id="brand-statement">
      {/* Intro with animated splashed ink */}
      <div className="brand-intro">
        <div className="ink-splash"></div>
      </div>

      <div className="brand-content">
        <h2 className="brand-manifesto">
          {lang === "en" 
            ? "What one wears is will." 
            : "纏うのは、意志。"}
        </h2>
        <p className="brand-manifesto-sub">
          {lang === "en" 
            ? "Only those with conviction possess garments they should wear." 
            : "決意がある者にこそ、まとうべき衣がある。"}
        </p>
      </div>
    </section>
  );
};

export default BrandStatement;
