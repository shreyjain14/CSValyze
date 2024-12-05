import React, { useState } from "react";
import "./AlgorithmPage.css";
import { useNavigate } from "react-router-dom";

const AlgorithmPage = () => {
  const navigate = useNavigate();

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [showSupervised, setShowSupervised] = useState(false);
  const [showUnsupervised, setShowUnsupervised] = useState(false);

  const supervisedAlgorithms = {
    "Regression Algorithms": [
      "Linear Regression",
      "Polynomial Regression",
      "Ridge Regression",
      "Lasso Regression",
    ],
    "Classification Algorithms": [
      "Logistic Regression",
      "Support Vector Machines (SVM)",
      "Decision Tree",
      "Random Forest",
      "Gradient Boosting (XGBoost, LightGBM, CatBoost)",
      "K-Nearest Neighbors (KNN)",
      "Naive Bayes (Gaussian, Multinomial, Bernoulli)",
    ],
    "Time Series Forecasting": ["ARIMA", "SARIMA", "ARCH", "GARCH"],
  };

  const unsupervisedAlgorithms = {
    "Clustering Algorithms": [
      "K-Means Clustering",
      "K-Medoids Clustering",
      "Hierarchical Clustering (Agglomerative, Divisive, BIRCH)",
      "Fuzzy C-Means",
    ],
  };

  const handleAlgorithmSelect = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const handleNextClick = () => {
    if (!selectedAlgorithm) {
      alert("Please select an algorithm!");
      return;
    }
    navigate("/result", { state: { selectedAlgorithm } }); // Pass selected algorithm to the result page
  };

  const renderAlgorithmList = (algorithms) => {
    return Object.entries(algorithms).map(([category, items]) => (
      <div key={category} className="algorithm-category">
        <h3>{category}</h3>
        <ul>
          {items.map((algo) => (
            <li
              key={algo}
              onClick={() => handleAlgorithmSelect(algo)}
              className={`algorithm-item ${
                selectedAlgorithm === algo ? "selected" : ""
              }`}
            >
              {algo}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="algorithm-page">
      <h1 className="headline">Select an Algorithm</h1>
      <p className="subheadline">Choose the best-suited algorithm for your data.</p>

      {/* Buttons to toggle supervised and unsupervised categories */}
      <div className="button-group">
        <button
          className={`toggle-button ${showSupervised ? "active" : ""}`}
          onClick={() => {
            setShowSupervised(!showSupervised);
            setShowUnsupervised(false);
          }}
        >
          Supervised Learning
        </button>
        <button
          className={`toggle-button ${showUnsupervised ? "active" : ""}`}
          onClick={() => {
            setShowUnsupervised(!showUnsupervised);
            setShowSupervised(false);
          }}
        >
          Unsupervised Learning
        </button>
      </div>

      {/* Render dropdown for supervised algorithms */}
      {showSupervised && (
        <div className="algorithm-list">
          {renderAlgorithmList(supervisedAlgorithms)}
        </div>
      )}

      {/* Render dropdown for unsupervised algorithms */}
      {showUnsupervised && (
        <div className="algorithm-list">
          {renderAlgorithmList(unsupervisedAlgorithms)}
        </div>
      )}

      {/* Next button */}
      <button className="next-button" onClick={handleNextClick}>
        Next &rarr;
      </button>
    </div>
  );
};

export default AlgorithmPage;
