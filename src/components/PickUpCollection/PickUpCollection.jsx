import React, { useContext, useState, useEffect, useRef } from "react";
import "./PickUpCollection.css";
import { Link } from "react-router-dom";
import product1 from "../../assets/images/product2.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.jpg";

import { LanguageContext } from "../../context/LanguageContext";

const products = [
  { id: 1, name: "Product 1", img: product1, link: "/products/1" },
  { id: 2, name: "Product 2", img: product2, link: "/products/2" },
  { id: 3, name: "Product 3", img: product3, link: "/products/3" },
  { id: 4, name: "Product 4", img: product4, link: "/products/4" },
];

const ProductList = () => {
  const { lang } = useContext(LanguageContext);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [isLooping] = useState(true); // enable looping
  const trackRef = useRef(null);
  const shootRef = useRef(null);
  const touchStartRef = useRef(0);
  const autoplayRef = useRef(null);

  // responsive perView
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 576) setPerView(1);
      else if (w < 992) setPerView(2);
      else setPerView(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // autoplay loop (5 sec per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const nextIdx = (prev + 1) % Math.max(1, products.length - perView + 1);
        if (nextIdx !== prev) triggerGold();
        return nextIdx;
      });
    }, 5000);
    autoplayRef.current = timer;
    return () => clearInterval(timer);
  }, [perView]);

  // pause autoplay on interaction
  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  const resumeAutoplay = () => {
    pauseAutoplay();
    autoplayRef.current = setInterval(() => {
      setIndex((prev) => {
        const nextIdx = (prev + 1) % Math.max(1, products.length - perView + 1);
        if (nextIdx !== prev) triggerGold();
        return nextIdx;
      });
    }, 5000);
  };

  const maxIndex = Math.max(0, products.length - perView);

  const go = (dir) => {
    pauseAutoplay();
    setIndex((prev) => {
      let next = prev + dir;
      // looping: wrap around
      if (isLooping) {
        next = (next % Math.max(1, maxIndex + 1));
        if (next < 0) next = Math.max(1, maxIndex + 1) + next;
      } else {
        // no looping: clamp
        next = Math.min(maxIndex, Math.max(0, next));
      }
      if (next !== prev) triggerGold();
      return next;
    });
    setTimeout(resumeAutoplay, 3000); // resume after 3 sec
  };

  // touch swipe support
  const handleTouchStart = (e) => {
    pauseAutoplay();
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartRef.current;
    const threshold = 50;
    if (Math.abs(delta) > threshold) {
      go(delta > 0 ? -1 : 1); // swipe right = prev, left = next
    }
    setTimeout(resumeAutoplay, 3000);
  };

  // trigger gold-shoot animation by toggling class
  const triggerGold = () => {
    const el = shootRef.current;
    if (!el) return;
    el.classList.remove("active");
    // force reflow
    void el.offsetWidth;
    el.classList.add("active");
  };

  return (
    <section className="product-list-section pickup-slider-section">
      <h2 className="product-list-title">{lang === "en" ? "Pick Up Collection" : "ピックアップコレクション"}</h2>

      <div className="slider-controls">
        <button className="slider-btn" onClick={() => go(-1)} disabled={!isLooping && index === 0} aria-label="Prev">
          ‹
        </button>
        <button className="slider-btn" onClick={() => go(1)} disabled={!isLooping && index === maxIndex} aria-label="Next">
          ›
        </button>
      </div>

      <div className="pickup-slider">
        <div
          className="slider-track"
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateX(-${(100 / perView) * index}%)`, gridTemplateColumns: `repeat(${products.length}, ${100 / perView}%)` }}
        >
          {products.map((product) => {
            const match = product.name.match(/(Product|商品)?\s*(\d+)/i);
            const num = match ? match[2] : product.id;
            return (
              <Link key={product.id} to={product.link} className="slide product-card">
                <div className="image-wrapper">
                  <img src={product.img} alt={product.name} />
                  <div className="hover-frame"></div>
                </div>
                <p className="product-name">{lang === "jp" ? `商品 ${num}` : `Product ${num}`}</p>
              </Link>
            );
          })}
        </div>

        {/* gold shoot overlay */}
        <div className="gold-shoot" ref={shootRef} aria-hidden="true"></div>
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
