

import { Box,Container, Grid, Typography } from '@mui/material';
import MyCard from './Card';

const info = [
  {
    image: '/assets/img1.webp', 
    title: 'PatientNotes Gets to the Core of Pelvic Health Documentation',
    subtitle: 'GenHealth - Jessica',
  },
  {
    image: '/assets/img2.webp',
    title: 'Swift steps for the podiatrist using PatientNotes on the road',
    subtitle: 'Best Foot Forward - Ankush',
  },
  {
    image: '/assets/img3.webp',
    title: 'Tech Meets Touch for this Osteopath using AI with PatientNotes',
    subtitle: 'Noosa Osteopathy - Skye',
  },
];

export default function Cardpage1 () {
  return (
    <Box  sx={{  width: "100%", 
        height: "730px",   backgroundColor:'rgb(41,87,106)', padding:'85px 180px 0px 180px ',margin:'0' }}>
      <Typography variant="h6" align="center" gutterBottom sx={{ color: '#C1F0D6', marginBottom: '10px'}}style={{fontWeight:'bold'}}>
        Meet Our Customers
      </Typography>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#fff', marginBottom: '80px' }}
      style={{ fontFamily: 'var(--font-libre), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',fontWeight:'bold',lineHeight:'40px'}}>
        Used in thousands of clinical <br></br>sessions worldwide
      </Typography>
      <Grid container
        spacing={4}
        >
        {info.map((ele, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MyCard
              image={ele.image}
              title={ele.title}
              subtitle={ele.subtitle}
            />
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};


