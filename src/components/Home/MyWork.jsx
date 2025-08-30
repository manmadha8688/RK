import React, { useState, useEffect } from "react";
import "./MyWork.css";
import ParticleBackground from "../ParticleBackground"; // new
import { color } from "framer-motion";

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  const galleryData = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Timeless Photography, Unforgettable Memories",
      text: "Celebrating life’s special occasions with creativity, precision, and a passion for storytelling through images."
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Capturing Smiles that Last Forever",
      text: "Every smile tells a story, and we make sure it’s remembered for generations."
    },
    {
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      title: "Your Moments, Our Lens",
      text: "Turning your everyday experiences into artistic visual memories."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      title: "Art in Every Frame",
      text: "Crafting unique perspectives that make your story stand out."
    },
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
      title: "Preserve Love, Light, and Life",
      text: "From candid laughs to grand celebrations, we capture them all."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing(true);
      setCurrentIndex((prev) =>
        prev === galleryData.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsFlashing(false), 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryData.length]);

  return (
    <div className="home-work">
      <ParticleBackground /> {/* 🔹 particle effect background */}
        <div className="mywork-title">
    <h2 className="section-title" >My Work</h2>
    <p>A glimpse into my photography journey</p>
  </div>
      <div className="work-content">
        
        
        <div className="work-left">
          
          <h2>{galleryData[currentIndex].title}</h2>
          <p>{galleryData[currentIndex].text}</p>
        </div>
        <div className="work-right">
          <div className="camera-outline">
            <div className="camera-viewfinder"></div>
            <div className="camera-lens-outline">
              <div
                className={`lens-flash ${isFlashing ? "flash-active" : ""}`}
              ></div>
            </div>
            <div className="camera-screen">
              <div className="image-gallery">
                {galleryData.map((item, index) => (
                  <img
                    key={index}
                    src={`${item.image}?auto=format&fit=crop&w=400&h=300&q=80`}
                    alt={`Gallery ${index + 1}`}
                    className={index === currentIndex ? "active" : ""}
                  />
                ))}
              </div>
            </div>
            <div className="camera-brand">CAMERA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
