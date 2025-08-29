import React, { useState, useEffect } from "react";
import "./Hero_home.css";

const Hero_home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  
  // Sample images for the camera animation
  const galleryImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
  ];

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger flash effect
      setIsFlashing(true);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
      
      // Remove flash effect after short delay
      setTimeout(() => setIsFlashing(false), 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="home-hero">
      {/* Fullscreen background */}
      <img 
        src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667" 
        alt="Background" 
        className="hero-bg" 
      />

      {/* Overlay content */}
      <div className="hero-content">
        <div className="hero-left">
          <h1>Timeless Photography, Unforgettable Memories</h1>
<p>
  Celebrating life’s special occasions with creativity, precision, and a passion for storytelling through images.
</p>

        </div>
        
        <div className="hero-right">
          {/* Simple Camera Outline */}
          <div className="camera-outline">
            {/* Camera Viewfinder */}
            <div className="camera-viewfinder"></div>
             {/* Camera Lens Outline with Flash Effect */}
            <div className="camera-lens-outline">
              {/* Flash effect overlay */}
              <div className={`lens-flash ${isFlashing ? 'flash-active' : ''}`}></div>
            </div>
            
            {/* Camera Screen with Image Animation */}
            <div className="camera-screen">
              <div className="image-gallery">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={`${img}?auto=format&fit=crop&w=400&h=300&q=80`}
                    alt={`Gallery ${index + 1}`}
                    className={index === currentImageIndex ? "active" : ""}
                  />
                ))}
              </div>
            </div>
            
           
            
            {/* Camera Brand */}
            <div className="camera-brand">CAMERA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_home;