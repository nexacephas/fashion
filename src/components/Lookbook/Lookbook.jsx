// LookbookPreview.jsx
import React from "react";
import "./Lookbook.css";

const videos = [
  { src: "/src/assets/videos/lookbook1.mp4", caption: "伝統の美" },
  { src: "/src/assets/videos/lookbook2.mp4", caption: "革新の力" },
  { src: "/src/assets/videos/lookbook3.mp4", caption: "優雅な線" },
  { src: "/src/assets/videos/lookbook4.mp4", caption: "墨の動き" },
];

const LookbookPreview = () => {
  return (
    <section className="lookbook" id="lookbook">
      <h2 className="lookbook-title">Lookbook 2025</h2>
      <div className="lookbook-grid">
        {videos.map((video, idx) => (
          <div className="lookbook-item" key={idx}>
            <div className="video-wrapper">
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="lookbook-video"
              />
              <div className="gold-particles"></div> {/* floating gold effect */}
            </div>
            <div className="lookbook-caption">
              <span>{video.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LookbookPreview;
