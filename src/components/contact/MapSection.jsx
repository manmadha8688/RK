import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
        <div className="map-text">
        <h2 className="map-title">Find Me Here</h2>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019901973536!2d-122.41941548468097!3d37.774929779759845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e7f2ff7%3A0x4c8b08b5f5b9d9f!2sSan%20Francisco%20CA!5e0!3m2!1sen!2sus!4v1692816800000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      
    </section>
  );
};

export default MapSection;
