import React, { useEffect, useState } from "react";
import "./KatanaLoader.css";

const KatanaLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      window.dispatchEvent(new CustomEvent("katana:done"));
      setVisible(false);
    }
  }, []);

  const finish = () => {
    setVisible(false);
    window.dispatchEvent(new CustomEvent("katana:done"));
  };

  if (!visible) return null;

  return (
    <div className="katana-loader" role="dialog" aria-label="Loading animation">
      <div
        className="katana-svg-wrap"
        onAnimationEnd={(e) => {
          // only fire when wrapper animation completes (2s)
          if (e.target.classList.contains("katana-svg-wrap")) {
            finish();
          }
        }}
      >
        <svg
          className="katana-svg"
          viewBox="0 0 360 360"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="var(--color-gold)" stopOpacity="1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Smooth long slash */}
          <path
            className="katana-path"
            d="M-20 200 C 80 160, 200 140, 380 120"
            fill="none"
            stroke="url(#goldGrad)"
            strokeLinecap="round"
          />

          {/* Glow layer */}
          <path
            className="katana-glow"
            d="M-20 200 C 80 160, 200 140, 380 120"
            fill="none"
            stroke="var(--color-gold)"
            strokeLinecap="round"
            filter="url(#blurGlow)"
          />

          {/* Flash bar */}
          <rect
            className="katana-flash"
            x="-50"
            y="110"
            width="120"
            height="8"
            fill="url(#goldGrad)"
            transform="rotate(-10 10 10)"
          />
        </svg>
      </div>
    </div>
  );
};

export default KatanaLoader;
