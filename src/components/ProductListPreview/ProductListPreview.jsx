// FeaturedProducts.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./ProductListPreview.css";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";

const Slider = SliderModule.default || SliderModule;

// Product data with translations
const products = [
  { 
    img: product1, 
    name: { en: "Samurai Jacket", jp: "侍ジャケット" }, 
    price: "$320" 
  },
  { 
    img: product2, 
    name: { en: "Ink Wash Kimono", jp: "墨流しの着物" }, 
    price: "$250" 
  },
  { 
    img: product3, 
    name: { en: "Gold Accent Hoodie", jp: "ゴールドアクセントパーカー" }, 
    price: "$180" 
  },
  { 
    img: product4, 
    name: { en: "Modern Hakama Pants", jp: "モダン袴パンツ" }, 
    price: "$200" 
  },
];

const FeaturedProducts = () => {
  const { lang } = useContext(LanguageContext);

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3, // default desktop
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992, // tablets
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576, // mobile
      settings: { slidesToShow: 1 }, // only 1 card
    },
  ],
};


  return (
    <section className="featured-products" id="featured">
      <div className="featured-header">
        <h2 className="section-title">{lang === "en" ? "Featured Items" : "注目商品"}</h2>
      </div>

      <Slider {...settings} className="products-slider">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.img} alt={product.name[lang]} />
            <div className="product-info">
              <h3>{product.name[lang]}</h3>
              <p>{product.price}</p>
              <button className="buy-btn">{lang === "en" ? "Buy Now" : "購入する"}</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProducts;
