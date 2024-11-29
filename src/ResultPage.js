import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CircularProgress } from '@mui/material';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { datasetName, algorithm } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const goBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <Box
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Loading results, please wait...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Results for {algorithm}
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '40px' }}>
        Dataset Used: <strong>{datasetName || 'N/A'}</strong>
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '40px' }}>
        Processing completed! You can now analyze the output or run another algorithm.
      </Typography>
      <Button variant="contained" color="primary" onClick={goBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default ResultPage;
