import React, { useState, useEffect, useRef } from "react";
import "./StatsSection.css";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 50, suffix: "+", label: "Events Captured" },
    { number: 10, suffix: "+", label: "Years Experience" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 1200, suffix: "+", label: "Happy Clients" }
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <h2 className="stats-title">Crafting Timeless Journeys</h2>
<p className="stats-subtitle">Because every memory deserves its own masterpiece</p>

        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <StatItem
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={isVisible}
                delay={index * 300} // Stagger animation
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Stat Item Component
const StatItem = ({ number, suffix, label, isVisible, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      // Add delay before starting animation
      const timer = setTimeout(() => {
        setHasAnimated(true);
        
        const duration = 2000; // Animation duration in ms
        const startTime = Date.now();
        
        const animateCount = () => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.round(number * easeOutQuart);
          
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            setCount(number); // Ensure exact number at the end
          }
        };
        
        requestAnimationFrame(animateCount);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay, hasAnimated]);

  return (
    <>
      <div className="stat-number">{count}</div>
      <div className={`stat-${suffix === "%" ? "percent" : "plus"}`}>
        {suffix}
      </div>
      <p className="stat-label">{label}</p>
    </>
  );
};

export default StatsSection;