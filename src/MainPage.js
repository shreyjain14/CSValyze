import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  const [view, setView] = useState("main");
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // Error message for invalid file type
  const navigate = useNavigate();

  useEffect(() => {
    const backgroundImageUrl = "./img/bg.jpeg";
    document.querySelector(".homepage-main").style.backgroundImage = `url(${backgroundImageUrl})`;
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.name.split('.').pop().toLowerCase();
      const allowedTypes = ['csv', 'json', 'xlsx'];

      if (allowedTypes.includes(fileType)) {
        setFileName(file.name);
        setView("fileUploading");

        const interval = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setView("fileUploaded");
              return 100;
            }
            return prev + 10;
          });
        }, 200);
      } else {
        setErrorMessage("Please upload a valid file type: .csv, .json, or .xlsx");
      }
    }
  };

  const handleUnderConstructionClick = () => {
    setView("underConstruction");
  };

  const handleNextClick = () => {
    navigate("/algorithm");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <main className="homepage-main">
        {view === "main" && (
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
                  style={{ display: "none" }}
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

            {errorMessage && (
              <div className="error-message">
                <p>{errorMessage}</p>
              </div>
            )}
          </>
        )}

        {view === "fileUploading" && (
          <div className="alternate-content">
            <h1 className="headline">File Uploading...</h1>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
            </div>
          </div>
        )}

        {view === "fileUploaded" && (
          <div className="alternate-content">
            <div className="message-box">
              <h1>File Uploaded Successfully</h1>
              <p><strong>File Name:</strong> {fileName}</p>
              <p>Proceed with your analysis now.</p>
            </div>

      {/* Updated Swipe Button */}
      <div className="swipe-button-container" onClick={handleNextClick}>
        <button className="swipe-button">
          <span>Swipe Next</span>
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
          </div>
        )}

        {view === "underConstruction" && (
          <div className="alternate-content">
            <h1 className="headline">Coming Soon</h1>
            <p className="subheadline">
              The Images / Videos functionality is currently under development. Stay tuned for updates!
            </p>
          </div>
        )}
      </main>

            {/* Home Icon */}
            <div className="home-icon" onClick={handleHomeClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3l9 8h-3v10h-12v-10h-3z" />
        </svg>
      </div>
    </div>
  );
};

export default MainPage;
