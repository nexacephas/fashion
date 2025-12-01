import React from "react";
import "./ProductListPreview.css";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default || SliderModule;
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";

const products = [
  { img: product1, name: "Samurai Jacket", price: "$320" },
  { img: product2, name: "Ink Wash Kimono", price: "$250" },
  { img: product3, name: "Gold Accent Hoodie", price: "$180" },
  { img: product4, name: "Modern Hakama Pants", price: "$200" },
];

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="featured-products" id="featured">
      <h2 className="section-title">Featured Items</h2>
      <Slider {...settings} className="products-slider">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.img} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProducts;
