import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Select, MenuItem, FormControl, InputLabel, Grid, Paper, Box } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const MainPage = () => {
  const [dataset, setDataset] = useState(null);
  const [algorithm, setAlgorithm] = useState('');
  const navigate = useNavigate();

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setDataset(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  const runAlgorithm = () => {
    if (!dataset || !algorithm) {
      alert('Please upload a dataset and select an algorithm!');
      return;
    }
    // Navigate to the result page
    navigate('/result', { state: { datasetName: dataset.name, algorithm } });
  };

  return (
    <Box>
      {/* Full-Width Header */}
      <Box
        style={{
          backgroundColor: '#9694FF',
          padding: '20px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          color: '#FFFFFF',
        }}
      >
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          ML Platform
        </Typography>
      </Box>

      {/* Moving Text Widget */}
      <Box
        style={{
          backgroundColor: '#f0f0f0',
          padding: '10px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <Typography
          variant="body1"
          component="div"
          style={{
            display: 'inline-block',
            animation: 'marquee 20s linear infinite',
          }}
        >
          Welcome to the ML Platform | Upload your dataset, select an algorithm, and get started with machine learning | Supports many supervised and unsupervised model building
        </Typography>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>

      {/* Main Content */}
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {/* Left Pane */}
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: '20px', height: '100%' }}>
              <Typography variant="h6" style={{ marginBottom: '20px' }}>
                Algorithm Selection
              </Typography>

              {/* Algorithm Selection */}
              <FormControl fullWidth style={{ marginBottom: '20px' }}>
                <InputLabel id="algorithm-select-label">Select Algorithm</InputLabel>
                <Select
                  labelId="algorithm-select-label"
                  value={algorithm}
                  onChange={(e) => setAlgorithm(e.target.value)}
                >
                  <MenuItem value="Logistic Regression">Logistic Regression</MenuItem>
                  <MenuItem value="Random Forest">Random Forest</MenuItem>
                  <MenuItem value="K-Means Clustering">K-Means Clustering</MenuItem>
                </Select>
              </FormControl>

              {/* Run Button */}
              <Button
                variant="contained"
                color="primary"
                onClick={runAlgorithm}
                fullWidth
              >
                Run Algorithm
              </Button>
            </Paper>
          </Grid>

          {/* Right Pane */}
          <Grid item xs={12} sm={8}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6" style={{ marginBottom: '20px' }}>
                Dataset Upload
              </Typography>

              {/* Dataset Upload Section */}
              <div
                {...getRootProps()}
                style={{
                  border: '2px dashed #ccc',
                  padding: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <input {...getInputProps()} />
                <Typography>Drag & drop your dataset file here, or click to select</Typography>
              </div>
              {dataset && (
                <Typography style={{ marginTop: '20px' }}>
                  Uploaded File: <strong>{dataset.name}</strong>
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
        {/* Footer */}
        <Box
  style={{
    backgroundColor: '#f5f5f5',
    padding: '15px 25px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -1px 5px rgba(0,0,0,0.1)',
  }}
>
  <Typography variant="body2" style={{ color: '#555' , fontSize: '1.2rem'}}>
    <a href="#help" style={{ marginRight: '15px', textDecoration: 'none', color: '#9694FF' }}>
      Help
    </a>
    |
    <a href="#contact" style={{ marginLeft: '15px', textDecoration: 'none', color: '#9694FF' }}>
      Contact Us
    </a>
  </Typography>
</Box>
    </Box>
  );
};

export default MainPage;
