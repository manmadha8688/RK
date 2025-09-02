import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Camera flash animation
    const flashInterval = setInterval(() => {
      setCameraActive(prev => !prev);
      setTimeout(() => setCameraActive(false), 300);
    }, 4000);
    
    return () => clearInterval(flashInterval);
  }, []);

  return (
    <div className={`not-found-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="photography-elements">
        <div className="camera">
          <div className="camera-body">
            <div className="camera-lens">
              <div className={`lens-inner ${cameraActive ? 'flash' : ''}`}>
                <div className="lens-core"></div>
              </div>
            </div>
            <div className="camera-viewfinder"></div>
          </div>
        </div>
        
        <div className="film-strip">
          <div className="film-perforations"></div>
          <div className="film-frame frame-1"></div>
          <div className="film-frame frame-2"></div>
          <div className="film-frame frame-3"></div>
          <div className="film-frame frame-4"></div>
          <div className="film-perforations"></div>
        </div>
        
        <div className="photo-paper">
          <div className="polaroid">
            <div className="polaroid-image">
              <div className="polaroid-content">
                <h1>404</h1>
                <p>PHOTO NOT FOUND</p>
              </div>
            </div>
            <div className="polaroid-caption">
              The requested page is like a perfect shot that got away
            </div>
          </div>
        </div>
      </div>
      

<div className="photography-message">
  <h2>Focus on what's important</h2>
  <p>Let's capture a better destination</p>
  <div className="photo-buttons">
    <Link to="/" className="btn-shutter">
      <i className="fas fa-home"></i>
      Return Home
    </Link>
    <Link to="/portfolio" className="btn-gallery">
      <i className="fas fa-images"></i>
      Browse Gallery
    </Link>
  </div>
</div>

      <div className="aperture"></div>
      <div className="light-leak"></div>
    </div>
  );
};

export default NotFound;