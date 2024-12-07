import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* About Us Button Icon */}
      <div className="top-right-link">
        <Link to="/about" className="about-us-link">
          <img 
            src="./img/about-icon.png" 
            alt="About Us Icon" 
            className="about-us-icon" 
          />
        </Link>
      </div>

      {/* Feature 1: Video Background */}
      <div className="feature-section" id="feature-1">
        <video className="background-video" autoPlay loop muted
        style={{
          opacity: 1,
        }
        }>
          <source src="./img/logo.mp4" type="video/mp4" />
        </video>
      </div>

      <div
  className="feature-section"
  id="feature-2"
  style={{
    backgroundImage: 'url(./img/two.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="content-overlay"
      style={{
        background: 'rgba(255, 255, 255, 0.1)', // Dark semi-transparent background
        padding: '30px',
        borderRadius: '15px',
        maxWidth: '600px', // Limit content width for better readability
        textAlign: 'center', // Center text inside the box
      }}
  >
    
    <h2
      className="feature-title"
      style={{
        color: '#063979', // Example color
      }}
    >
      Feature 2: Fast Processing
    </h2>
    <p
      className="feature-description"
      style={{
        color: '#21130d', // Example color
      }}
    >
      Enjoy lightning-fast processing and analysis, helping you make data-driven decisions quickly.
    </p>
  </div>
</div>


      {/* Feature 2: Image Background */}
      <div className="feature-section" id="feature-1">
        <video className="background-video" autoPlay loop muted>
          <source src="./img/AI.mp4" type="video/mp4" />
        </video>
        <div className="content-overlay">
          <h2 className="feature-title">Feature 1: Easy to Use</h2>
          <p className="feature-description">
            Our platform is intuitive and user-friendly, allowing anyone to get started without prior experience.
          </p>
        </div>
      </div>

      <div
  className="feature-section"
  id="feature-2"
  style={{
    backgroundImage: 'url(./img/two.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
<div className="content-overlay"
      style={{
        background: 'rgba(255, 255, 255, 0.1)', // Dark semi-transparent background
        padding: '30px',
        borderRadius: '15px',
        maxWidth: '600px', // Limit content width for better readability
        textAlign: 'center', // Center text inside the box
      }}
  >
    
    <h2
      className="feature-title"
      style={{
        color: '#063979', // Example color
      }}
    >
      Feature 2: Fast Processing
    </h2>
    <p
      className="feature-description"
      style={{
        color: '#21130d', // Example color
      }}
    >
      Enjoy lightning-fast processing and analysis, helping you make data-driven decisions quickly.
    </p>
  </div>
</div>

      {/* Floating Button */}
      <Link to="/main" className="floating-button">
        Take Me Now
      </Link>
    </div>
  );
};

export default HomePage;
