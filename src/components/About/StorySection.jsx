import React, { useEffect, useRef, useState } from "react";
import "./StorySection.css";

const StorySection = () => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Film grain animation
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createFilmGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random() * 50;
        data[i] = grain;
        data[i + 1] = grain;
        data[i + 2] = grain;
        data[i + 3] = 5 + Math.random() * 5;
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    const grainInterval = setInterval(createFilmGrain, 100);

    return () => {
      clearInterval(grainInterval);
      window.removeEventListener('resize', resizeCanvas);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="story-section">
      {/* Animated Film Grain Overlay */}
      <canvas ref={canvasRef} className="film-grain"></canvas>

      {/* Floating Photography Elements */}
      <div className="floating-elements">
        <div className="floating-camera">📷</div>
        <div className="floating-film">🎞️</div>
      </div>

      <div className="story-container">
        {/* Animated Title */}
        <h2 className="section-heading">
  <span className="heading-line">Through My</span>
  <span className="heading-line">Lens</span>
</h2>



        <div className="story-content">
          {/* Animated Text */}
          <div className={`story-text ${isVisible ? 'slide-in' : ''}`}>
            <p className="animated-paragraph">
              <span className="text-reveal">My journey began not with a camera, but with a curiosity for human stories.</span>
            </p>
            <p className="animated-paragraph">
              <span className="text-reveal">Each click of the shutter is a heartbeat frozen in time - a testament to</span>
            </p>
            <p className="animated-paragraph">
              <span className="text-reveal">love, joy, and the beautiful chaos of life's most precious moments.</span>
            </p>
            
            {/* Interactive Timeline */}
            <div className="photography-timeline">
              <div className="timeline-track"></div>
              <div className="timeline-milestones">
                <div className="milestone" data-year="2015">
                  <div className="milestone-dot"></div>
                  <span className="milestone-text">First Professional Camera</span>
                </div>
                <div className="milestone" data-year="2018">
                  <div className="milestone-dot"></div>
                  <span className="milestone-text">First Wedding</span>
                </div>
                <div className="milestone" data-year="2020">
                  <div className="milestone-dot"></div>
                  <span className="milestone-text">Studio Established</span>
                </div>
                <div className="milestone" data-year="2023">
                  <div className="milestone-dot"></div>
                  <span className="milestone-text">500+ Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Holographic Image Display */}
          <div className={`story-image-hologram ${isVisible ? 'hologram-active' : ''}`}>
            <div className="hologram-container">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=500&h=600&q=80" 
                alt="Photography Journey" 
                className="hologram-image"
              />
              
              {/* Holographic Effects */}
              <div className="hologram-grid"></div>
              <div className="hologram-glare"></div>
              <div className="hologram-particles">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="h-particle" style={{
                    animationDelay: `${i * 0.2}s`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}></div>
                ))}
              </div>
              
              {/* Floating Info Cards */}
              <div className="info-card card-1">
                <span className="info-icon">✨</span>
                <span>8 Years Experience</span>
              </div>
              <div className="info-card card-2">
                <span className="info-icon">🌟</span>
                <span>500+ Events</span>
              </div>
              <div className="info-card card-3">
                <span className="info-icon">📸</span>
                <span>10K+ Photos</span>
              </div>
            </div>

            {/* Developing Photo Effect */}
            <div className="photo-developing">
              <div className="developer-solution"></div>
              <div className="photo-emerge"></div>
            </div>
          </div>
        </div>

        {/* Animated Photography Principles */}
       <div className="principles-grid">
  <div className="principle" data-principle="Story">
    <div className="principle-icon">🌟</div>
    <h4>Our Story Through the Lens</h4>
    <p>Every frame begins with a vision — the journey of turning moments into art.</p>
  </div>
  <div className="principle" data-principle="Emotion">
    <div className="principle-icon">📸</div>
    <h4>Capturing Souls</h4>
    <p>We preserve emotions, connections, and the beauty of real human moments.</p>
  </div>
  <div className="principle" data-principle="Album">
    <div className="principle-icon">📖</div>
    <h4>Memories Turned Into Albums</h4>
    <p>Your special moments are transformed into timeless albums you can cherish forever.</p>
  </div>
</div>
</div>

      

      {/* Floating Photo Frames */}
      
    </section>
  );
};

export default StorySection;