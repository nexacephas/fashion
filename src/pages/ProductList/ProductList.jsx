import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./ProductList.css";

// Dynamic import all product images using Vite's import.meta.glob
const imageModules = import.meta.glob("../../assets/images/product*.{png,jpg,jpeg}", { eager: true });

// Generate products array from all product images
const generateProducts = () => {
  const productList = Object.entries(imageModules).map(([path, module], idx) => {
    const fileName = path.split("/").pop().replace(".jpg", "");
    return {
      id: idx + 1,
      name: fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/([A-Z])/g, " $1"),
      img: module.default,
      price: `$${Math.floor(Math.random() * 250) + 50}`,
    };
  });
  return productList.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/)?.[0] || 0);
    const numB = parseInt(b.name.match(/\d+/)?.[0] || 0);
    return numA - numB;
  });
};

const products = generateProducts();

const ProductListPage = () => {
  const { lang } = useContext(LanguageContext);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <p className="product-name">
              {(() => {
                // Extract number from product name (e.g., "Product 1")
                const match = product.name.match(/(Product|商品)?\s*(\d+)/i);
                if (match) {
                  const num = match[2];
                  return lang === "jp" ? `商品 ${num}` : `Product ${num}`;
                }
                return product.name;
              })()}
            </p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {lang === "en" ? "Prev" : "戻る"}
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          {lang === "en" ? "Next" : "次へ"}
        </button>
      </div>
    </section>
  );
};

export default ProductListPage;
