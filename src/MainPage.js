import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Add this import
import "./MainPage.css";

const MainPage = () => {
  const [view, setView] = useState("main");
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const backgroundImageUrl = "./img/three.jpeg";
    document.querySelector(".homepage-main").style.backgroundImage = `url(${backgroundImageUrl})`;
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.name.split('.').pop().toLowerCase();
      const allowedTypes = ['csv', 'json', 'xlsx'];

      if (allowedTypes.includes(fileType)) {
        const formData = new FormData();
        formData.append('file', file);

        // Axios for file upload
        axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          }
        })
        .then(response => {
          setFileName(file.name);
          setView("fileUploaded");
          navigate("/result", { 
            state: { 
              edaResults: response.data,
              fileName: file.name 
            } 
          });
        })
        .catch(error => {
          console.error('File upload error:', error);
          setErrorMessage("Error uploading file. Please try again.");
          setView("main");
        });
      } else {
        setErrorMessage("Please upload a valid file type: .csv, .json, or .xlsx");
      }
    }
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
                  id="fileInput"
                  type="file"
                  accept=".csv, .xlsx, .json"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </label>
              <button
                className="btn btn-secondary"
                data-tooltip="Upload supported image or video formats"
                onClick={() => setView("underConstruction")}
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
              <div 
                className="progress" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p>{uploadProgress}%</p>
          </div>
        )}

        {view === "fileUploaded" && (
          <div className="alternate-content">
            <div className="message-box">
              <h1>File Uploaded Successfully</h1>
              <p><strong>File Name:</strong> {fileName}</p>
              <p>Proceed with your analysis now.</p>
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
    </div>
  );
};

export default MainPage;