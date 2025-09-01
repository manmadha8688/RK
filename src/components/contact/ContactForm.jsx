import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <h2>Let’s Connect</h2>
        <p>
          I’d love to hear from you! Whether it’s a project, collaboration, or
          just a friendly hello — let’s make something amazing together.
        </p>
      </div>

      {/* Social Links */}
      <div className="social-section">
        <div className="social-links">
          <a href="#" className="social instagram">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="social facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="social twitter">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="social linkedin">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h3>Send a Message</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
