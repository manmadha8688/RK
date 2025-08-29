import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding Photography",
      content: "Absolutely incredible! Captured our special day perfectly. The photos tell our love story better than words ever could. We'll cherish these memories forever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
      id: 2,
      name: "The Johnson Family",
      event: "Birthday Party",
      content: "Our daughter's first birthday was captured so beautifully! The photographer was amazing with kids and got natural, joyful shots we'll treasure always.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      id: 3,
      name: "TechCorp Inc.",
      event: "Corporate Event",
      content: "Professional, punctual, and produced stunning photos for our annual conference. The team loved the candid shots that captured the energy of our event.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      id: 4,
      name: "James & Emma",
      event: "Anniversary Party",
      content: "We celebrated 25 years together and the photos are absolutely magical. They perfectly captured the love and joy of our celebration with family and friends.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Hear from the wonderful people we've had the pleasure of working with</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-active">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">“</div>
                <p>{testimonials[activeTestimonial].content}</p>
                <div className="rating">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-author">
                <div className="author-image floating">
                  <img 
                    src={`${testimonials[activeTestimonial].image}?auto=format&fit=crop&w=120&h=120&q=80`} 
                    alt={testimonials[activeTestimonial].name}
                    className="profile-img"
                  />
                  <div className="image-border"></div>
                  <div className="floating-elements">
                    <div className="floating-element-1"></div>
                    <div className="floating-element-2"></div>
                    <div className="floating-element-3"></div>
                  </div>
                </div>
                <div className="author-info">
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <p>{testimonials[activeTestimonial].event}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-navigation">
            <button className="nav-btn prev-btn" onClick={prevTestimonial}>
              ‹
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={index === activeTestimonial ? "dot active" : "dot"}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
            
            <button className="nav-btn next-btn" onClick={nextTestimonial}>
              ›
            </button>
          </div>
        </div>

        
        </div>
    </section>
  );
};

export default Testimonials;