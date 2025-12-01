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
        <h2 className="brand-title">{lang === "en" ? "Yamato Spirit × Modern Fashion" : "大和の精神 × モダンファッション"}</h2>
        <p className="brand-text">
          {lang === "en" ? "Inspired by the disciplined elegance of Japanese tradition and Yamato spirit, our brand's designs fuse heritage with contemporary style. Every creation embodies strength, sophistication, and timeless beauty." : "日本の伝統と大和の精神が持つ規律ある優雅さにインスパイアされた当ブランドのデザインは、遺産と現代スタイルを融合させています。すべての作品は、力強さ、洗練さ、そして時を超えた美しさを体現しています。"}
        </p>

      </div>
    </section>
  );
};

export default BrandStatement;
