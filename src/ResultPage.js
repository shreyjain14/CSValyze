import React, { useState } from 'react';
import './ResultPage.css';

const ResultPage = () => {
  const [showVisualization, setShowVisualization] = useState(false);
  const [showChatGPTModal, setShowChatGPTModal] = useState(false);

  const handleVisualizationClick = () => {
    setShowVisualization(!showVisualization);
  };

  const handleChatGPTClick = () => {
    setShowChatGPTModal(true); // Show ChatGPT modal
  };

  const handleCloseModal = () => {
    setShowChatGPTModal(false); // Close ChatGPT modal
  };

  const handleNextClick = () => {
    window.location.href = '/main'; // Redirect to the main page (change '/main' to the actual path of your main page)
  };

  return (
    <div className="result-page">
      <h1 className="headline">Analysis Results</h1>
      <p className="subheadline">Here are the insights from your analysis:</p>
      
      <div className="results-container">
        <div className="result-item">
          <h2>Accuracy</h2>
          <p>95%</p>
        </div>
        <div className="result-item">
          <h2>Precision</h2>
          <p>92%</p>
        </div>
        <div className="result-item">
          <h2>Recall</h2>
          <p>90%</p>
        </div>
        <div className="result-item">
          <h2>Algorithm</h2>
          <p>Algorithm 1</p>
        </div>
      </div>

      <button className="visualization-button" onClick={handleVisualizationClick}>
        {showVisualization ? 'Hide Visualization' : 'Show Visualization'}
      </button>

      {showVisualization && (
        <div className="visualization-content">
          <h2>Data Visualization (Placeholder)</h2>
          <div className="chart-placeholder">
            <p>Chart will be rendered here...</p>
          </div>
        </div>
      )}

      {/* ChatGPT Logo Button */}
      <img
        src="./img/gem.png" // Update this path to the actual ChatGPT logo image file
        alt="ChatGPT Logo"
        className="chatgpt-logo-button"
        onClick={handleChatGPTClick} // Open the modal on click
      />

      {/* Modal for ChatGPT Button */}
      {showChatGPTModal && (
        <div className="chatgpt-modal">
          <h2>ChatGPT Results</h2>
          <p>Here are the detailed results from the algorithm evaluation process:</p>
          <p><strong>Accuracy:</strong> 95%</p>
          <p><strong>Precision:</strong> 92%</p>
          <p><strong>Recall:</strong> 90%</p>
          <p><strong>Algorithm Used:</strong> Algorithm 1</p>
          <button className="modal-close-btn" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      )}

      {/* Next Button (to redirect to the main page) */}
      <div className="next-button-container">
        <button className="next-button" onClick={handleNextClick}>
          &larr; {/* Left arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
