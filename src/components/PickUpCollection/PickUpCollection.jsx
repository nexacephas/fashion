import React, { useContext } from "react";
import "./PickUpCollection.css";
import { Link } from "react-router-dom";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";

import { LanguageContext } from "../../context/LanguageContext";

const products = [
  { id: 1, name: "Product 1", img: product1, link: "/products/1" },
  { id: 2, name: "Product 2", img: product2, link: "/products/2" },
  { id: 3, name: "Product 3", img: product3, link: "/products/3" },
  { id: 4, name: "Product 4", img: product4, link: "/products/4" },
  { id: 5, name: "Product 5", img: product5, link: "/products/5" },
  { id: 6, name: "Product 6", img: product6, link: "/products/6" },
];

const ProductList = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="product-list-section">
      {/* Heading */}
      <h2 className="product-list-title">{lang === "en" ? "Pick Up Collection" : "ピックアップコレクション"}</h2>

      <div className="product-grid">
        {products.map((product) => {
          // Extract number from product name (e.g., "Product 1")
          const match = product.name.match(/(Product|商品)?\s*(\d+)/i);
          const num = match ? match[2] : product.id;
          return (
            <Link key={product.id} to={product.link} className="product-card">
              <div className="image-wrapper">
                <img src={product.img} alt={product.name} />
                <div className="hover-frame"></div>
              </div>
              <p className="product-name">{lang === "jp" ? `商品 ${num}` : `Product ${num}`}</p>
            </Link>
          );
        })}
      </div>

      <div className="view-all-wrapper">
        <Link to="/products" className="view-all-btn">
          {lang === "en" ? "View All Products" : "全商品を見る"}
        </Link>
      </div>
    </section>
  );
};

export default ProductList;
