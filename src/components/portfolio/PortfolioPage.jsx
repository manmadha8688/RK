import React, { useEffect, useRef, useState } from "react";
import "./PortfolioPage.css";

const portfolioImages = [
  { src: "/photos/came.jpg", category: "Wedding", title: "Wedding Day" },
  { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80", category: "Fashion", title: "Fashion Shoot" },
  { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80", category: "Event", title: "Corporate Event" },
  { src: "https://images.unsplash.com/photo-1488372759470-c1d9cf3abf70?auto=format&fit=crop&w=800&q=80", category: "Travel", title: "Travel Photography" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", category: "Nature", title: "Sunset Shoot" },
];

const categories = ["All", "Wedding", "Fashion", "Event", "Travel", "Nature"];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: `rgba(${Math.random() * 70 + 150}, ${Math.random() * 70 + 150}, ${Math.random() * 70 + 200}, ${Math.random() * 0.5 + 0.2})`
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(1, "#1e293b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particlesRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse repulsion
        const dx = p.x - mousePosition.current.x;
        const dy = p.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100;
          p.x += Math.cos(angle) * force * 0.5;
          p.y += Math.sin(angle) * force * 0.5;
        }

        // Reset if out of screen
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = e => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cinematic-portfolio">
      <canvas ref={canvasRef} className="cinematic-canvas"></canvas>
      <h1 className="portfolio-title">My Photography Portfolio</h1>

      <div className="category-buttons">
        {categories.map(cat => (
          <button key={cat} className={selectedCategory === cat ? "active" : ""} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {portfolioImages
          .filter(img => selectedCategory === "All" || img.category === selectedCategory)
          .map((img, idx) => (
            <div key={idx} className="portfolio-item">
              <img src={img.src} alt={img.title} />
              <div className="overlay">
                <h3>{img.title}</h3>
                <p>{img.category}</p>
              </div>
            </div>
          ))}
        {Array.from({ length: (3 - (portfolioImages.length % 3)) % 3 }).map((_, idx) => (
          <div key={`empty-${idx}`} className="portfolio-item empty"></div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
