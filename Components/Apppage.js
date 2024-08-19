
import * as React from 'react';
import { Grid, Card, CardContent, Typography, Button,Rating, Box } from '@mui/material';
import Image from 'next/image';

export default function Appdes() {
  return (
    <Grid container   style={{ height: '700px',width:'100%' }}>
      <Grid item >
        <Box elevation={0} style={{ padding: '114px', background: 'linear-gradient(to left,#e2f9ec 25%,#fbf7f4,#e5efed)',height:'700px' }} >
          <Grid container spacing={15} >
            <Grid item xs={12} md={6}   >
                <Box >
              <Image src="/iphone.webp" alt="iPhone" width={650} height={500}  />
              </Box >
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
              <Rating value={5} readOnly />
                 
                <Typography variant="h3" component="h2" gutterBottom sx={{color:'#29576a',fontWeight:'100px',fontFamily: '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
}}>
                  PatientNotes iOS app for iPhone and iPad
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Version 1.0 (Updated April 4, 2024)
                </Typography>
                <Typography variant="body1" style={{ marginTop: '16px' }} color="textSecondary">
                Whether you are doing a consult in a gym, doing an in-home visit or just want to dictate some quick notes while they spring to mind, the PatientNotes app is a great companion that works with your account. Capture the session using an iPad or iPhone and access your notes from your computer, tablet or phone. You can then use your laptop or PC to save time on other clinical admin tasks, such as medical letters and reports.
                </Typography>
                <Typography mt={3} ml={3}color="textSecondary">
                    <ul>
                  <li>Quickly create a new session</li>
                  <li>Use the power of your iPhone microphone</li>
                  <li>Access PatientNotes from anywhere</li>
                </ul>
                </Typography>
                <Box marginTop={2}>
                  <Button variant="contained" sx={{ backgroundColor: '#29576a', color:'white',borderRadius:'28px', padding:'7px 7px' ,
          fontSize: '15px',
          textTransform: 'none', 
            
          width:'240px',
          marginTop:'17px',
          '&:hover': {
            backgroundColor: '#7be8a8', 
            color: 'rgb(35, 68, 91)', 
                             }
        }}  style={{ marginRight: '8px' }}>
                    Download now for free
                  </Button>
                  <Button variant="contained"   sx={{ backgroundColor: 'rgb(193, 240, 214)', color:'rgb(41 ,87, 106 )',borderRadius:'28px', padding:'7px 7px' ,
          fontSize: '15px',
          textTransform: 'none', 
            fontWeight: 'bold',
          width:'240px',
          marginTop:'17px',
          '&:hover': {
            backgroundColor: '#7be8a8', 
            color: 'rgb(35, 68, 91)', 
                             }
        }} >
                    Leave a review
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
