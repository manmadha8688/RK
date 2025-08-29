import React, { useEffect, useRef } from "react";
import "./AboutHero.css";

const AboutHero = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Particle animation for background
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
      }
      draw() {
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

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Typewriter effect
    const text = "CAPTURING SOULS THROUGH LENS";
    let index = 0;
    const typeWriter = () => {
      if (index < text.length) {
        textRef.current.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();

    return () => {
      canvas.width = canvas.height = 0;
    };
  }, []);

  return (
    <section className="about-hero">
      {/* Particle Background */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      {/* Circular Images Left & Right */}
      

      <div className="about-hero-container">
        <div className="cosmic-content">
          {/* Animated Text */}
            <h1 className="glitch-text">VISUAL STORYTELLER</h1>
            <div ref={textRef} className="typewriter-text"></div>
          

          {/* Holographic Profile */}
          <div className="holographic-profile">
            <div className="profile-container">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Photographer"
                className="floating-image"
              />
              <div className="energy-orb"></div>
              <div className="digital-grid"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Visualizer */}
      <div className="audio-visualizer">
        {[...Array(32)].map((_, i) => (
          <div
            key={i}
            className="visualizer-bar"
            style={{ animationDelay: `${i * 0.05}s` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
