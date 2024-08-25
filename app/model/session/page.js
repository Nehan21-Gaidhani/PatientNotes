"use client";

import styles from "/app/page.module.css";
import React, { useEffect, useState } from 'react';
import { Typography, Box ,Button,Link } from '@mui/material';
import dynamic from 'next/dynamic';


const Speech = dynamic(() => import('../Model.js'), { ssr: false });

export default function DisplayPage() {
 

  return (
    <div className={styles.main} >
     <Box sx={{ padding: 2, backgroundColor: '#00374e', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Clinical Notes</Typography>
  <Link href="/model/patient">
    <Button variant="contained" sx={{ backgroundColor: 'white', color: '#00374e' ,
    '&:hover': { backgroundColor: '#7be8a8', color: 'rgb(35, 68, 91)', } }}>+ New Session</Button>
  </Link>
</Box>
      <Speech />
    </div>
  );
}
