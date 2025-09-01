import React from "react";
import "./CTAPortfolio.css";

const CTAPortfolio = () => {
  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="cta-portfolio-section">
      <div className="film-grain"></div>
      <div className="bokeh-lights"></div>
      <div className="light-rays"></div>
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <h2 className="cta-h2">✨ Capture Your Moments in Style</h2>
        <p>
          Let's create visuals that shine brighter than memories themselves.
          Get in touch today and turn your vision into timeless art.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary" onClick={handleContactClick}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAPortfolio;
