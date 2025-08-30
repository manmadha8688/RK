import React, { useState, useEffect } from 'react';
import './Hero_home.css';

const Hero_home = () => {
  const [stage, setStage] = useState(0); // 0: camera, 1: smile, 2: flash, 3: reveal content

  useEffect(() => {
    // Show Smile after 1s
    const smileTimer = setTimeout(() => setStage(1), 1000);

    // Show flash after 2s
    const flashTimer = setTimeout(() => setStage(2), 2000);

    // Reveal background & content after 2.5s
    const revealTimer = setTimeout(() => setStage(3), 2500);

    return () => {
      clearTimeout(smileTimer);
      clearTimeout(flashTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  return (
    <div className="hero-container">
      {/* Background */}
      <div className={`background-image ${stage === 3 ? 'reveal' : ''}`}></div>

      {/* Camera */}
      <div className={`camera ${stage >= 2 ? 'hide' : ''}`}>
        <div className="camera-body">
          <div className="camera-lens"></div>
          <div className="camera-flash"></div>
        </div>
        
      </div>
{stage >= 1 && <div className="text-smile">Smile 😊</div>}
      {/* Flash overlay */}
      <div className={`flash-overlay ${stage === 2 ? 'active' : ''}`}></div>

      {/* Hero Content */}
      <div className={`hero-content ${stage === 3 ? 'visible' : ''}`}>
        <h1>Capture Perfect Moments</h1>
        <p>Professional photography for unforgettable experiences</p>
        <button>View Portfolio</button>
      </div>
    </div>
  );
};

export default Hero_home;
