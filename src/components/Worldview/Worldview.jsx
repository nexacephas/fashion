// WorldviewStory.jsx
import React from "react";
import "./Worldview.css";
import video from "../../assets/videos/23324-334689157_small.mp4";

const lines = [
  "What one wears is will.",
  "Quietly hold the path you must walk within your heart.",
  "For those who traverse the ages with unwavering resolve.",
  "Only those with conviction possess garments they should wear.",
];

const WorldviewStory = () => {
  return (
    <section className="worldview-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="worldview-text">
        {lines.map((line, idx) => (
          <p
            key={idx}
            className="fade-in-text"
            style={{ animationDelay: `${idx * 0.5}s` }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default WorldviewStory;
