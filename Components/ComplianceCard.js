import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default  function ComplianceCard ({ imageSrc, imageAlt, title, description, buttonText, buttonLink }) {
  return (
    <Box textAlign={{ md: 'center' }}>
      <Box sx={{ maxWidth: 48,ml:17, mb: 4 }}>
        <Image
          alt={imageAlt}
          src={imageSrc}
          width={200}
          height={200}
          style={{ color: 'transparent' }}
        />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#29576a', fontFamily: 'var(--font-libre)' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.primary', mt: 2, textAlign:'center',fontSize:'14px' }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={buttonLink}
        sx={{ backgroundColor: 'rgb(193, 240, 214)', color:'rgb(41 ,87, 106 )', marginLeft:'70px',borderRadius:'28px', padding:'7px 7px' ,
          fontSize: '14px',
          textTransform: 'none', 
            fontWeight: 'bold',
          width:'370px',
          marginTop:'27px',
          '&:hover': {
            backgroundColor: '#7be8a8', 
            color: 'rgb(35, 68, 91)', 
                             }
        }} 
      >
        {buttonText}
      </Button>
    </Box>
  );
};


