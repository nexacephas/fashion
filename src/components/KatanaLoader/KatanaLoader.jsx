import React, { useEffect, useState } from "react";
import "./KatanaLoader.css";

const KatanaLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      window.dispatchEvent(new CustomEvent("katana:done"));
      setVisible(false);
    }
  }, []);

  const finish = () => {
    setFadeOut(true); // start fade-out
    setTimeout(() => {
      setVisible(false);
      window.dispatchEvent(new CustomEvent("katana:done"));
    }, 800); // fade-out duration
  };

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 250); // flash lasts 250ms
  };

  if (!visible) return null;

  return (
    <div 
      className={`katana-loader ${fadeOut ? "fade-out" : "fade-in"}`}
      role="dialog"
      aria-label="Loading animation"
    >
      {/* Flash overlay */}
      {flash && <div className="katana-flash"></div>}

      <video
        className="katana-video"
        src="\slash effect - Puppy (480p, h264, youtube).mp4"
        autoPlay
        muted
        playsInline
        onPlay={() => triggerFlash()}  // flash at first hit
        onEnded={finish}
      />
    </div>
  );
};

export default KatanaLoader;
