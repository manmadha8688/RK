import React, { useEffect, useRef, useState } from "react";
import "./PersonalSection.css";

const PersonalSection = () => {
  const personaltitle = useRef(null);
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (personaltitle.current) {
      observer.observe(personaltitle.current);
    }

    // Particle Background
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = personaltitle.current.offsetWidth;
      canvas.height = personaltitle.current.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 40 + 200}, 80%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={personaltitle}
      className={`personal-section ${isVisible ? "visible" : ""}`}
    >
      {/* Particle Background */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      <div className="container personal-container">
        {/* Left - Image (moved here) */}
        <div className="personal-image">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
              alt="Photographer"
              className="main-image"
            />
            <div className="holo-glow"></div>
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* Right - Text */}
        <div className="personal-text">
          <h2 className="personal-title">
            <span className="title-line title-part-1">Beyond</span>
            <span className="title-line title-part-2">the Lens</span>
          </h2>

          <div className="animated-paragraphs">
            <p className="paragraph">
              <span className="text-reveal">
                Photography isn't just about freezing time —
                it's about revealing emotions hidden in a glance,
                turning fleeting instants into timeless memories.
              </span>
            </p>
            
          </div>

          {/* Extra Content */}
          <div className="extra-content">
            <p className="paragraph">
              My journey with the camera is more than technical skill —
              it’s about connection, storytelling, and perspective.
            </p>

            <ul className="highlight-list">
              <li>✨ Capturing authentic human emotions</li>
              <li>🌍 Exploring culture through visual stories</li>
              <li>📷 Transforming everyday moments into art</li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
