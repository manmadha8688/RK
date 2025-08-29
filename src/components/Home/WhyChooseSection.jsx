import React from "react";
import "./WhyChooseSection.css";

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <h2>Why Choose Me?</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <div className="reason-number">01</div>
            <h3>Personalized Approach</h3>
            <p>
              I take time to understand your unique story and vision, ensuring your 
              photos reflect your personality and style.
            </p>
          </div>
          <div className="reason-card">
            <div className="reason-number">02</div>
            <h3>Professional Quality</h3>
            <p>
              Using top-tier equipment and advanced editing techniques to deliver 
              stunning, high-resolution images.
            </p>
          </div>
          <div className="reason-card">
            <div className="reason-number">03</div>
            <h3>Quick Turnaround</h3>
            <p>
              Receive your beautifully edited photos within 2-3 weeks of your event, 
              with sneak peeks within 48 hours.
            </p>
          </div>
          <div className="reason-card">
            <div className="reason-number">04</div>
            <h3>Client Satisfaction</h3>
            <p>
              100% satisfaction guarantee. I work with you until you're completely 
              happy with your photos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;