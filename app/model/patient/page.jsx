"use client";
import styles from "/app/page.module.css";
import { Box, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Name() {
  const [textValue, setTextValue] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem('textValue', textValue);
    router.push('/model/session');
  };

  return (
    <div className={styles.main}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '730px',
          width: '100%',
           background: 'linear-gradient(to left,#e2f9ec 25%,#fbf7f4,#e5efed)'
        }}
      >
       
        <Box sx={{ backgroundColor: '#00374e', color: 'white', padding: 2 }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold', }}>
            Start a new session
          </Typography>
        </Box>

      
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, paddingTop: 1 }}>
          <Box
            sx={{
              width: '300px',
              height: '400px',
              backgroundImage: 'url(/assets/doctor.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginRight: 4,
              borderRadius:'8px',
            }}
          />
          <Box
            sx={{
              padding: '12px',
              height: '400px',
              width: '400px',
              backgroundColor: '#ffffff',
              border: '1px solid #00374e',
              borderRadius: '8px',
            }}
          >
            <Typography variant='h6' sx={{ color: 'rgb(35, 68, 91)', fontWeight: 'bold' }}>
              Please enter your patient's name
            </Typography>
            <Box mt={5} sx={{ height: '200px', width: '100%' }}>
              <TextField
                label="Enter patient name"
                variant="outlined"
                value={textValue}
                onChange={handleChange}
                fullWidth
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  marginTop: 7,
                  backgroundColor: 'rgb(193, 240, 214)',
                  color: 'rgb(41, 87, 106)',
                  borderRadius: '28px',
                  padding: '3px 3px',
                  fontSize: '14px',
                  height: '40px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  width: '100px',
                  '&:hover': { backgroundColor: '#7be8a8', color: 'rgb(35, 68, 91)' },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>

        
        
      </Box>
    </div>
  );
}
