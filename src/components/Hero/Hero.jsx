import React, { useState, useRef, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Hero.css";
import heroVideo from "../../assets/videos/42151-431423226_small.mp4";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

const Hero = () => {
  const { lang } = useContext(LanguageContext);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="hero-video"
        />
      </div>

      <div className="hero-overlay">
        <div className="slash-animation"></div>
        <h1 className="hero-title">{lang === "en" ? "Resolve Attire" : "決意の衣"}</h1>
        <p className="hero-subtitle">{lang === "en" ? "Where identity meets style." : "個性とスタイルが出会う場所"}</p>
        <a href="#brand-statement" className="hero-btn">
          {lang === "en" ? "Explore Collection" : "コレクションを見る"}
        </a>
      </div>

      {/* Sound toggle */}
      <button className="sound-button" onClick={toggleSound}>
        {isMuted ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
      </button>

      {/* Scroll Down Cue */}
      <div className="scroll-down">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
