import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import "./KatanaLoader.css";

// NOTE: Place your Lottie JSON at: src/assets/lottie/katana.json
// If it's not available, this component will fallback to a CSS slash animation.

const KatanaLoader = () => {
  const [animationData, setAnimationData] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    // Try to dynamically import the Lottie JSON if present
    import("../../assets/lottie/katana.json")
      .then((mod) => {
        if (!mounted) return;
        setAnimationData(mod.default || mod);
      })
      .catch(() => {
        // asset not present — we'll use CSS fallback
      });

    return () => {
      mounted = false;
    };
  }, []);

  const finish = () => {
    // hide loader and notify listeners
    setVisible(false);
    // dispatch a global event so the logo can reveal
    window.dispatchEvent(new CustomEvent("katana:done"));
  };

  // If we have lottie data, play it and finish when complete
  if (!visible) return null;

  return (
    <div className="katana-loader" role="dialog" aria-label="Loading animation">
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay
          onComplete={finish}
          style={{ width: 360, height: 360 }}
        />
      ) : (
        <div className="katana-fallback" onAnimationEnd={finish}>
          <div className="slash-visual"></div>
        </div>
      )}
    </div>
  );
};

export default KatanaLoader;
