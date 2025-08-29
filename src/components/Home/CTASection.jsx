import React from "react";
import "./CTASection.css";

const CTASection = () => {
  const handleContactRedirect = () => {
    // Redirect to contact page
    window.location.href = "/contact";
    // Or use this if you're using React Router:
    // navigate('/contact');
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Capture Your Special Moments?</h2>
          <p>
            Let's create beautiful memories together. Whether it's your wedding day, 
            a milestone birthday, or a special event, I'll be there to capture every 
            genuine smile, every heartfelt embrace, and every unforgettable moment.
          </p>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-icon">📸</span>
              <span>Professional Quality</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">⏱️</span>
              <span>Quick Turnaround</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">💝</span>
              <span>Personalized Service</span>
            </div>
          </div>
          <button className="cta-button" onClick={handleContactRedirect}>
            Get In Touch Today
            <span className="button-arrow">→</span>
          </button>
          <p className="cta-note">
            Limited availability for 2024 - Book your date now!
          </p>
        </div>
        
        <div className="cta-image">
          <div className="floating-photos">
            <img 
              src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?auto=format&fit=crop&w=200&h=200&q=80" 
              alt="Wedding" 
              className="floating-photo photo-1"
            />
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=200&h=200&q=80" 
              alt="Birthday" 
              className="floating-photo photo-2"
            />
            <img 
              src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&w=200&h=200&q=80" 
              alt="Event" 
              className="floating-photo photo-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;