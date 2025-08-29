import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "fab fa-instagram",
      color: "#E1306C"
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "fab fa-facebook-f",
      color: "#1877F2"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "fab fa-twitter",
      color: "#1DA1F2"
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com",
      icon: "fab fa-pinterest-p",
      color: "#BD081C"
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "fab fa-youtube",
      color: "#FF0000"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "fab fa-linkedin-in",
      color: "#0077B5"
    }
  ];

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Social Media Section */}
        <div className="social-section">
          <h3>Follow Our Journey</h3>
          <p>Stay connected and see behind the scenes</p>
          <div className="social-icons-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--hover-color': social.color }}
              >
                <i className={social.icon}></i>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <i className="fas fa-camera"></i>
              <span>Capture Moments</span>
            </div>
            <p>Creating timeless memories through professional photography</p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Wedding Photography</li>
              <li>Birthday Events</li>
              <li>Corporate Events</li>
              <li>Portrait Sessions</li>
              <li>Family Photography</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> hello@capturemoments.com</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Photography St, City, State</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Capture Moments Photography. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;