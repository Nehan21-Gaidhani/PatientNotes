
import { Stack,Container, Grid, Typography, Link, Box, IconButton,Paper } from '@mui/material';
import Image from 'next/image';
import { List, ListItem, ListItemText } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
export default function  Footer ()  {
  return (
    
    <Box sx={{height:'1110px' ,display: 'flex' ,flexDirection: 'column',justifyContent:'center',alignItems:'center'}} pt={16} >
      <Grid  container sx={{ height:'900px', width:'1160px' ,borderBottom: '1px solid #e5e7eb'}} spacing={4}  >
         <Grid item md={4} sx={{}}>
          <Stack >
            <Box  >
            <Image src="/footerlogo.svg" alt="logo" width={200} height={100}  /> 
            </Box>
            <Typography  color="textSecondary">Saving time for health practitioners: speedy patient note finalisation, supported by A.I.</Typography>
            <Box width={220} sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography style={{ marginTop: '16px' }} color="textSecondary">
  <EmailIcon /> 
  </Typography>
  <Link style={{ marginTop: '16px' }}color="textSecondary">hello@patientnotes.app</Link>

</Box>
<Box width={190} sx={{display:'flex', justifyContent:'space-between'}} >
            <Link style={{ marginTop: '16px' }} color="textSecondary">
  <LinkedInIcon /> 
</Link>
<Link style={{ marginTop: '16px' }} color="textSecondary">
  <InstagramIcon /> 
</Link>
<Link style={{ marginTop: '16px' }} color="textSecondary">
  <FacebookIcon />
</Link>
<Link style={{ marginTop: '16px' }} color="textSecondary">
  <TwitterIcon /> 
</Link>
<Link style={{ marginTop: '16px' }} color="textSecondary">
  <YouTubeIcon />
</Link>
</Box>

          </Stack>
         </Grid>
         <Grid item md={2} sx={{}}>
            <Typography variant="subtitle2" sx={{fontWeight:'bold',}}>Professions</Typography>
         <List>
         <Typography style={{ marginTop: '16px' }} color="textSecondary">Doctor</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Medical Professional</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Nurse</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Psychologist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Psychiatrist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Speech Pathologist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Arts Therapist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Veterinarian</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Dentist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Podiatrist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Hand Therapist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Pediatrician</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Dental Technician</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Dermatologist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Psychiatric Nurse Practitioner</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">General Practitioner</Typography>


      

    </List>
        </Grid>
        <Grid item md={2} sx={{}}>
       
        <Typography style={{ marginTop: '18px' }} color="textSecondary">Physiotherapist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Dietician</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">OT</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Chiropractor</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Acupuncturist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Osteopath</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Exercise Physiologist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Massage Therapist</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Dialysis Technician</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Cardiac Surgeon</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Social Worker</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Eye Surgeon</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Mental Health Counselor</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Nurse Practitioner</Typography>
<Typography  style={{ marginTop: '16px' }} color="textSecondary">For practice managers</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">For business owners</Typography>
        </Grid>
        <Grid item md={2} sx={{}}>
        <Typography variant="subtitle2" sx={{fontWeight:'bold',}}>  Support</Typography> 
        <List>
        <Typography style={{ marginTop: '16px' }} color="textSecondary">Help Center</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Request a Demo</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">FAQs</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Pricing</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Security</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Privacy & Compliance</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">HIPAA</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">GDPR</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Webinars + Events</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Meet Our Customers</Typography>

        </List>
        </Grid>
        <Grid item md={2} sx={{}}>
        <Typography variant="subtitle2" sx={{fontWeight:'bold',}}> Company</Typography> 
        <List>
        <Typography style={{ marginTop: '16px' }} color="textSecondary">About</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Blog</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Careers</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Press</Typography>

        </List>
        <Typography variant="subtitle2" sx={{fontWeight:'bold',marginTop: '16px' }}>  Apps</Typography> 
        <Typography style={{ marginTop: '16px' }} color="textSecondary">iPhone</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">iPad</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Mac</Typography>

        <Typography variant="subtitle2" sx={{fontWeight:'bold',marginTop: '16px' }}>  Legal</Typography> 
        <Typography style={{ marginTop: '16px' }} color="textSecondary">Privacy</Typography>
<Typography style={{ marginTop: '16px' }} color="textSecondary">Terms</Typography>


        </Grid>
      </Grid>
      
      <Box sx={{ width: '100%', borderTop: '1px solid #e5e7eb', py: 2, display: 'flex', justifyContent: 'flex-start', px: 16}}>
        <Typography variant="body2" color="textSecondary">
          © 2024 PatientNotes Pty Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
    
    
  );
};

