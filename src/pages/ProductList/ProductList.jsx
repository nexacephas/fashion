import React, { useState } from "react";
import "./ProductList.css";

const products = [
  { id: 1, name: "Product 1", img: "/assets/products/product1.jpg", price: "$120" },
  { id: 2, name: "Product 2", img: "/assets/products/product2.jpg", price: "$150" },
  { id: 3, name: "Product 3", img: "/assets/products/product3.jpg", price: "$100" },
  { id: 4, name: "Product 4", img: "/assets/products/product4.jpg", price: "$180" },
  { id: 5, name: "Product 5", img: "/assets/products/product5.jpg", price: "$90" },
  { id: 6, name: "Product 6", img: "/assets/products/product6.jpg", price: "$200" },
  // add more as needed
];

const ProductListPage = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="full-product-page">
      <div className="page-header">
        <h1>COLLECTION</h1>
        <div className="gold-line"></div>
      </div>

      <div className="product-grid">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.img} alt={product.name} />
              <div className="hover-frame"></div>
            </div>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default ProductListPage;
