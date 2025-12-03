import React, { useEffect, useState } from "react";
import "./KatanaLoader.css";

const KatanaLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(false);
      window.dispatchEvent(new CustomEvent("katana:done"));
    }
  }, []);

  // Handler for when the animation is finished
  const finish = () => {
    setVisible(false);
    window.dispatchEvent(new CustomEvent("katana:done"));
  };

  if (!visible) return null;

  return (
    <div className="katana-loader" role="dialog" aria-label="Loading animation">
      <svg
        className="katana-svg"
        viewBox="0 0 360 360"
        xmlns="http://www.w3.org/2000/svg"
        // The animation length is now controlled by the CSS keyframes.
        // We will trigger 'finish' on the 'katana-trail' animation instead.
        aria-hidden="true"
      >
        <defs>
          {/* Defined a stronger gold gradient for the main blade */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF2A3" stopOpacity="1" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF2A3" stopOpacity="1" />
          </linearGradient>
          {/* Defined a blur for the glowing trail */}
          <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
            </feMerge>
          </filter>
        </defs>

        {/* Revised path (d attribute) for a longer, deeper, and more aggressive slash 
          Starts off-screen left-top, ends off-screen right-bottom.
        */}
        <path
          d="M-50 100 Q 180 30, 410 260"
          stroke="var(--color-gold)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          filter="url(#blurGlow)"
          className="katana-trail"
          onAnimationEnd={finish} // Trigger finish on the trail animation end
        />

        {/* Main blade is shorter, sharper, and moves *within* the glow trail.
          It uses the gradient to mimic light reflection on the blade.
        */}
        <path
          d="M-50 100 Q 180 30, 410 260"
          stroke="url(#goldGrad)"
          strokeWidth="6" // Thinner for a sharp look
          strokeLinecap="round"
          fill="none"
          className="katana-blade"
        />
      </svg>
    </div>
  );
};

export default KatanaLoader;