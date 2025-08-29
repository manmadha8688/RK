import React, { useEffect, useRef, useState } from "react";
import "./PhilosophySection.css";

const PhilosophySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const philosophyData = [
    {
      id: 1,
      icon: "🎯",
      title: "Authenticity",
      description: "I strive to capture genuine emotions and real moments rather than staged poses. Your photos should tell your true story.",
      color: "#FF6B6B"
    },
    {
      id: 2,
      icon: "💫",
      title: "Creativity",
      description: "Every client is unique, and I approach each project with fresh eyes and creative ideas to make your photos stand out.",
      color: "#4ECDC4"
    },
    {
      id: 3,
      icon: "🤝",
      title: "Collaboration",
      description: "I work closely with you to understand your vision and ensure your photos reflect your personality and style.",
      color: "#FFD166"
    },
    {
      id: 4,
      icon: "🥇",
      title: "Excellence",
      description: "From shooting to editing, I maintain the highest standards of quality to deliver photos you'll cherish forever.",
      color: "#6A0572"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`philosophy-section ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">My Creative Vision</h2>
        <div className="philosophy-grid">
          {philosophyData.map((item, index) => (
            <div 
              key={item.id}
              className={`philosophy-card ${activeCard === item.id ? 'active' : ''}`}
              style={{ '--accent-color': item.color }}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-inner">
                <div className="card-face card-front">
                  <div className="philosophy-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className="card-face card-back">
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;