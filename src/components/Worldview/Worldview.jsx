// WorldviewStory.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Worldview.css";
import video from "../../assets/videos/23324-334689157_small.mp4";

// Text lines for the worldview story
const lines = {
  en: [
    "What one wears is will.",
    "Quietly hold the path you must walk within your heart.",
    "For those who traverse the ages with unwavering resolve.",
    "Only those with conviction possess garments they should wear.",
  ],
  jp: [
    "着るものは意志である。",
    "心の中に歩むべき道を静かに持て。",
    "揺るぎない決意で時を越える者たちへ。",
    "信念を持つ者だけが身に着けるべき衣を持つ。",
  ],
};

const WorldviewStory = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="worldview-section">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="video-background"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay text */}
      <div className="worldview-text">
        {lines[lang].map((line, idx) => (
          <p
            key={idx}
            className="fade-in-text"
            style={{ animationDelay: `${idx * 0.5}s` }} // staggered fade-in
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default WorldviewStory;
