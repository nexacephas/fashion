import React from "react";
import "./PickUpCollection.css";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", img: "../../assets/images/product1.jpg", link: "/products/1" },
  { id: 2, name: "Product 2", img: "/assets/images/product2.jpg", link: "/products/2" },
  { id: 3, name: "Product 3", img: "/assets/images/product3.jpg", link: "/products/3" },
  { id: 4, name: "Product 4", img: "/assets/images/product4.jpg", link: "/products/4" },
  { id: 5, name: "Product 5", img: "/assets/images/product5.jpg", link: "/products/5" },
];

const ProductList = () => {
  return (
    <section className="product-list-section">
      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={product.link}
            className="product-card"
          >
            <div className="image-wrapper">
              <img src={product.img} alt={product.name} />
              <div className="hover-frame"></div>
            </div>
            <p className="product-name">{product.name}</p>
          </Link>
        ))}
      </div>

      {/* Link to Full Product Page */}
      <div className="view-all-wrapper">
        <Link to="/products" className="view-all-btn">
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductList;
