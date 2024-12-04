import React from 'react';
import './ResultPage.css';

const ResultPage = () => {
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

      <button className="back-button" onClick={() => window.location.href = '/'}>
        Back to Home
      </button>
    </div>
  );
};

export default ResultPage;
