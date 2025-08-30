import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="overlay"></div>
      <div className="form-container">
        <h2 className="form-title">Get in Touch</h2>
        <p className="form-subtitle">
          Let’s talk about your next project, event, or photography session.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

