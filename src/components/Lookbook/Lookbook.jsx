// LookbookPreview.jsx
import React from "react";
import "./Lookbook.css";
import lookbook1 from "../../assets/videos/lookbook1.mp4";
import lookbook2 from "../../assets/videos/lookbook2.mp4";
import lookbook3 from "../../assets/videos/lookbook3.mp4";
import lookbook4 from "../../assets/videos/lookbook4.mp4";

const videos = [
  { src: lookbook1, caption: "伝統の美" },
  { src: lookbook2, caption: "革新の力" },
  { src: lookbook3, caption: "優雅な線" },
  { src: lookbook4, caption: "墨の動き" },
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
                preload="metadata"
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
