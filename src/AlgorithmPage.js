import React from 'react';
import './AlgorithmPage.css';
import { useNavigate } from 'react-router-dom';

const AlgorithmPage = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
      navigate('/result'); // Navigate to the ResultPage
    };

  return (
    <div className="algorithm-page">
      <h1 className="headline">Select an Algorithm</h1>
      <div className="dropdown">
        <select className="dropdown-select">
          <option value="algorithm1">Algorithm 1</option>
          <option value="algorithm2">Algorithm 2</option>
          <option value="algorithm3">Algorithm 3</option>
        </select>
      </div>

      {/* Next button */}
      <button className="next-button" onClick={handleNextClick}>
        &rarr;
      </button>
    </div>
  );
};

export default AlgorithmPage;
