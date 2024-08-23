import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Link from '@mui/material/Link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from "../public/assets/logo-workmark-white.svg"
export default function Header() {
  return (
    <AppBar 
      
      sx={{ 
        background: 'linear-gradient(to bottom, #1e4d65 , #3b7d8e)',
        boxShadow: 'none',
        color: 'white',
        padding: '10px',
        textAlign: 'center', 
        border: 'none',
        zIndex:'0',
        position:'static'
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' ,border: 'none'}}>
        
         <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 30 ,marginLeft:3}}>
          <Link href="/" sx={{ display: 'flex', alignItems: 'center', }} underline="none">
            <Image
              alt="PatientNotes Logo"
              loading="lazy"
              width={170}
              height={105}
              opacity={0}
              src={logo}
              
              unoptimized
            />
          </Link>
        </Box>

       

     
           <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexGrow: 1, gap: 5 }}>
            <Link href="/pricing" underline="none">
            <Typography variant="body2" fontWeight="600" color="white">
              Pricing
            </Typography>
          </Link>
          <Link href="/faqs" underline="none">
            <Typography variant="body2" fontWeight="600" color="white">
              FAQs
            </Typography>
          </Link>
          <Link href="/privacy" underline="none">
            <Typography variant="body2" fontWeight="600" color="white">
              Privacy
            </Typography>
          </Link>
          <Link href="/security" underline="none">
            <Typography variant="body2" fontWeight="600" color="white">
              Security
            </Typography>
          </Link>
          <Link href="/our-customers" underline="none">
            <Typography variant="body2" fontWeight="600" color="white">
              Our Customers
            </Typography>
          </Link>
          <Link href="/help" underline="none">
            <Typography variant="body2" fontWeight="600" color="white">
              Help Center
            </Typography>
          </Link>
        </Box>

        
        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
          <Link href="/model/patient" underline="none" marginRight={3}>
            <Typography variant="h6" fontWeight="600" color="white" sx={{
            animation: 'colorChange 0.9s infinite',
            '@keyframes colorChange': {
              '0%': { color: 'lightgreen' },
              '50%': { color: 'white' },
              '100%': { color: 'lightgreen' },
            },
          }}>
             New session <span aria-hidden="true">→</span>
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
   
  );
}
