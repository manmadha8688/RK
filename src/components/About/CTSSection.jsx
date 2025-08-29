import React from "react";
import "./CTASection.css";

const CTASection = () => {
  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  const handlePortfolioClick = () => {
    window.location.href = "/portfolio";
  };

  return (
    <section className="about-cta-section">
      <div className="container">
        <h2>Let's Create Something Beautiful Together</h2>
        <p>
          Ready to preserve your special moments? I'd love to hear about your upcoming event 
          and discuss how we can work together to create timeless memories.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary" onClick={handleContactClick}>
            Get In Touch
          </button>
          <button className="cta-button secondary" onClick={handlePortfolioClick}>
            View Portfolio
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default CTASection;