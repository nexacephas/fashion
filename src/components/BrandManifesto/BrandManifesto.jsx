import React from "react";
import "./BrandManifesto.css";

const BrandStatement = () => {
  return (
    <section className="brand-statement" id="brand-statement">
      <div className="brand-content">
        <h2 className="brand-title">The Yamato Spirit × Modern Fashion</h2>
        <p className="brand-text">
          Inspired by Japanese tradition and the disciplined elegance of the Yamato Spirit, our
          designs fuse heritage with contemporary style. Every piece embodies strength,
          sophistication, and timeless beauty.
        </p>

        <div className="brand-icons">
          <div className="icon-card">
            <img
              src="https://images.unsplash.com/photo-1619983087453-3d3cba765c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=200"
              alt="Gold Brush Stroke"
            />
            <p>Gold brushstroke accent</p>
          </div>
          <div className="icon-card">
            <img
              src="https://images.unsplash.com/photo-1544986581-efac024faf62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=200"
              alt="Samurai Silhouette"
            />
            <p>Discipline & Strength</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
