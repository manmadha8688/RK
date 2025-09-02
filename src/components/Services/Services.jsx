import React from "react";
import "./Services.css";

const services = [
  {
    title: "Wedding Photography",
    desc: "Capturing timeless memories from your special day with a blend of elegance and candid moments.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", 
  },
  {
    title: "Portrait Sessions",
    desc: "Beautifully lit portraits that showcase personality and emotions with professional styling.",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", 
  },
  {
    title: "Fashion Shoots",
    desc: "Creative fashion photography with an eye for detail, color, and storytelling.",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c", 
  },
  {
    title: "Travel & Events",
    desc: "Capturing the beauty of landscapes, cultures, and events through a creative lens.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", 
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>My Services</h2>
      {services.map((service, index) => (
        <div
          key={index}
          className={`service ${index % 2 === 0 ? "normal" : "reverse"}`}
        >
          <img src={service.img} alt={service.title} />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
