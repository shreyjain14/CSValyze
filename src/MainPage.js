import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [view, setView] = useState('main');
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  // This hook will update the background image when the component mounts
  useEffect(() => {
    // Dynamically set background image (this can be changed to any image URL)
    const backgroundImageUrl = './img/bg.jpeg'; // Put the path to the image here
    document.querySelector('.homepage-main').style.backgroundImage = `url(${backgroundImageUrl})`;
  }, []);

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
    <div>
      <main className="homepage-main">
        {view === 'main' && (
          <>
            <h1 className="headline">Build and evaluate ML algorithm automatically</h1>
            <p className="subheadline">Upload Your Data</p>

            <div className="cta">
              <label
                className="btn btn-secondary"
                data-tooltip="Upload CSV, Excel, or JSON files for text/numerical data"
              >
                Text / Numerical
                <input
                  type="file"
                  accept=".csv, .xlsx, .json"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </label>
              <button
                className="btn btn-secondary"
                data-tooltip="Upload supported image or video formats"
                onClick={handleUnderConstructionClick}
              >
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
