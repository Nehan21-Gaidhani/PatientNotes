

import React from 'react';
import { Box,Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function MyCard ({ image, title, subtitle })  {
  return (
    <>
    <Card sx={{ borderRadius: 2 ,marginBottom:1}}>
      <CardMedia
        component="img"
        alt={title}
        height="250"
        image={image}
      />
      </Card>
     <Box>
        <Typography variant="h6" component="div" color="white" gutterBottom sx={{lineHeight:'25px'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="white" sx={{fontWeight:'bold'}}>
          {subtitle}
        </Typography>
        </Box>
    
        </>
  );
};


