import React, { useState } from 'react';
import './ResultPage.css';

const ResultPage = () => {
  const [showVisualization, setShowVisualization] = useState(false);

  const handleVisualizationClick = () => {
    setShowVisualization(!showVisualization);
  };

  const handleGeminiClick = () => {
    alert('Gemini button clicked!');
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

      {/* Visualization Button */}
      <button className="visualization-button" onClick={handleVisualizationClick}>
        {showVisualization ? 'Hide Visualization' : 'Show Visualization'}
      </button>

      {/* Visualization content */}
      {showVisualization && (
        <div className="visualization-content">
          <h2>Data Visualization (Placeholder)</h2>
          {/* Replace the below div with your actual chart or graph */}
          <div className="chart-placeholder">
            <p>Chart will be rendered here...</p>
          </div>
        </div>
      )}

      {/* Footer with Gemini button */}
      <footer className="footer">
        <button className="gemini-button" onClick={handleGeminiClick}>
          Gemini
        </button>
      </footer>

      {/* Bottom-right positioned Back to Home button */}
      <div className="action-buttons">
        <button className="back-button" onClick={() => window.location.href = '/'}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
