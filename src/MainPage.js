import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [view, setView] = useState('main');
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setView('fileUploaded');
    }
  };

  const handleUnderConstructionClick = () => {
    setView('underConstruction');
  };

  const handleNextClick = () => {
    navigate('/algorithm'); // Navigate to the algorithm page
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <nav className="navbar">
          <ul className="navbar-menu">
            <li>Product</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Open Source</li>
            <li>Enterprise</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </header>

      <main className="homepage-main">
        {view === 'main' && (
          <>
            <h1 className="headline">Build and evaluate ML algorithm automatically</h1>
            <p className="subheadline">Upload Your Data</p>

            <div className="cta">
              <label className="btn btn-primary">
                Text / Numerical
                <input
                  type="file"
                  accept=".csv, .xlsx"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </label>
              <button className="btn btn-secondary" onClick={handleUnderConstructionClick}>
                Images / Videos
              </button>
            </div>
          </>
        )}

        {view === 'fileUploaded' && (
          <div className="alternate-content">
            <h1 className="headline">File Uploaded Successfully</h1>
            <p className="subheadline">File Name: {fileName}</p>
            <p className="subheadline">Proceed with your analysis now.</p>

            {/* Next button */}
            <button className="next-button" onClick={handleNextClick}>
              &rarr;
            </button>
          </div>
        )}

        {view === 'underConstruction' && (
          <div className="alternate-content">
            <h1 className="headline">Coming Soon</h1>
            <p className="subheadline">
              The Images / Videos functionality is currently under development. Stay tuned for updates!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainPage;
