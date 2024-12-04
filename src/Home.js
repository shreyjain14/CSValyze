import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="feature-section" id="feature-1">
        <h2 className="feature-title">Feature 1: Easy to Use</h2>
        <p className="feature-description">
          Our platform is intuitive and user-friendly, allowing anyone to get started without prior experience.
        </p>
      </div>

      <div className="feature-section" id="feature-2">
        <h2 className="feature-title">Feature 2: Fast Processing</h2>
        <p className="feature-description">
          Enjoy lightning-fast processing and analysis, helping you make data-driven decisions quickly.
        </p>
      </div>

      <div className="feature-section" id="feature-3">
        <h2 className="feature-title">Feature 3: Secure</h2>
        <p className="feature-description">
          We prioritize the security of your data with industry-leading encryption and protection measures.
        </p>
      </div>

      <div className="feature-section" id="feature-4">
        <h2 className="feature-title">Feature 4: Scalable</h2>
        <p className="feature-description">
          Whether you are an individual or a large organization, our solution scales to meet your needs.
        </p>
      </div>

      <div className="feature-section" id="feature-5">
        <h2 className="feature-title">Feature 5: 24/7 Support</h2>
        <p className="feature-description">
          Our dedicated support team is available around the clock to assist you with any issues.
        </p>
      </div>

      {/* Floating Button */}
      <Link to="/main" className="floating-button">
        Take Me Now
      </Link>
    </div>
  );
};

export default HomePage;
