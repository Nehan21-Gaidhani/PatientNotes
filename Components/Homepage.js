import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import pic from '../public/assets/patientphone.webp';

import Image from 'next/image';
import Head from 'next/head';
import Button from '@mui/material/Button'; 
export default function Mainpage() {
    return (
        <>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>

        <Box 
            sx={{ 
                width: "100%", 
                height: "730px", 
                
                display: 'flex',  
                justifyContent: 'flex-start',  
                alignItems: 'flex-start',  
               
            }}>
            <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                
                sx={{ height: '100%', width: '100%' }} >
                  <Box sx={{ flex: 1,  background: 'linear-gradient(to top  , #1e4d65 60%, #3b7d8e)',  }}>
                   <Typography variant='h1'  sx={{
                   fontSize: {
                    xs: '2.25rem', 
                    sm: '3.75rem'  
                },
               
                fontWeight: 500, 
                fontSize: '60px',
                lineHeight: 1,
                letterSpacing: '0.7px',
                color: 'white',
                 textAlign: 'left',
                marginLeft: 19,       
                marginTop:9,
                marginBottom:2,  
                fontFamily: '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif '}}>
              Let AI write your <br></br>
            clinical notes so you <br></br>can focus on your <br></br>patients</Typography>

          <Typography
           variant="body1"
           color="white"
           sx={{
           fontFamily: '"Poppins", sans-serif', 
           fontSize: '1.25rem', 
           lineHeight: 1.8, 
           fontWeight: 400, 
           marginTop:0,
           marginLeft:19,
           maxWidth: '600px', 
      }}
    >
      PatientNotes is a clinical note-taking tool that uses AI to write clinical notes, patient summaries, and medical letters. It is designed to save you time and improve the quality of your notes. With a focus on privacy and security, PatientNotes is a safe and secure way to start leveraging AI in your work today.
    </Typography>

    <Button variant='contained'  sx={{ backgroundColor: 'rgb(193, 240, 214)', color:'rgb(41 ,87, 106 )', marginLeft:'150px',borderRadius:'28px', padding:'9px 9px' ,
      fontSize: '14px',
      textTransform: 'none' ,
        fontWeight: 'bold',
      
      width:'300px',
      marginTop:'27px',
      '&:hover': {
        backgroundColor: '#7be8a8', 
        color: 'rgb(35, 68, 91)', 
                         }
    }} >
        Get started with your free 14 day trial
        </Button>


       </Box>
                <Box sx={{ flex: 1,   background: 'linear-gradient(to top , #1e4d65 60%, #3b7d8e)',  display: 'flex', alignItems:'flex-end' , justifyContent:'flex-end',border: 'none',}}>
                <Image
              alt="PatientNotes Logo"
             
              width={615}
              height={501}
              src={pic}
              style={{ marginBottom: '130px' }}
                        />
       </Box>

    </Stack>
 </Box>
  </>
    );
}
