
import { Box, Grid, Typography, Avatar, Paper } from '@mui/material';


export default function Review ()  {
  return (
    
    <Box sx={{margin:'auto' , backgroundColor: '#29576a',height:'1000px' ,width:'100%',padding:'150px'}}>
        <Grid container spacing={4} sx={{ height: '80%', gridAutoRows: '1fr' }}>
    <Grid item lg={3} >
      <Paper elevation={3} sx={{ borderRadius: 5, p: 3, height: '620px' }}>
      <Typography variant="body1"  color="textPrimary" sx={{
       
        
        margin:0.87,
        color: 'text.primary',
        fontSize: '0.96rem',
        lineHeight: '1.6',
       
      }}>
              “After practicing for 14 years in both the United States and Australia, high-quality documentation is something I feel passionate about. I invest a lot of time into this area of my practice, yet often that time has fallen outside of work hours. PatientNotes has allowed me to increase the quality of my clinical documentation while saving time. My notes, a patient summary, and medical letters can be completed within minutes. It was an adjustment to vocalize my objective findings and treatment plan. Interestingly, it’s improved patient engagement and understanding of their condition.”
          </Typography>

          <Grid container alignItems="center" pt={1} >
               <Avatar alt="Sian Smale" src="Sian.jpg" />
               <Box ml={2} textAlign="left">
                 <Typography fontWeight="bold">Sian Smale</Typography>
               </Box>
             </Grid>
            </Paper>
          </Grid>

        
        
          <Grid item lg={6} >
            <Grid container spacing={4} >
              <Grid item lg={12}>
          <Paper elevation={3} sx={{ borderRadius: 5, p: 2, height: '300px' }}>
          <Typography variant="h6" fontWeight="600" color="textPrimary" p={3}>
              “PatientNotes has significantly changed the detail and accuracy with which I can document. It allows me to spend more time on tasks beyond admin, as it has done the bulk of the leg work whilst I still do the clinical thinking!”
            </Typography>

            <Grid container alignItems="center" borderTop={1} borderColor="#e5e7eb" pt={1} mt={1}>
              <Grid item xs={1}>
                <Avatar alt="Sarah Yule" src="Sarah.jpg" />
              </Grid>
              <Grid item xs={5}   >
                <Typography fontWeight="bold">Sarah Yule</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right" >
              <img
      alt="Physica Logo"
      src="physica-logo.png"
      style={{ maxWidth: '100%', maxHeight: '50px', objectFit: 'contain' }}
    />
              </Grid>
            </Grid>
            </Paper>
            </Grid>
            <Grid item lg={6} >
            
      <Paper elevation={3} sx={{ borderRadius: 5, p: 2, height: '450px' }}>
      <Typography variant="body1"  color="textPrimary" sx={{
       
        
       margin:1,
       color: 'text.primary',
       fontSize: '0.97rem',
       lineHeight: '1.6',
      
     }}>
      “As a practicing Musculoskeletal Physiotherapist for over forty years, I believe this innovation has improved the ease and thoroughness of my clinical assessment more than any other approach to this matter that I have used in my Practice. PatientNotes satisfies medico-legal requirements regarding the collection of anamnestic and objective data. It is surprisingly easy to apply clinically. ”
      </Typography>
      <Grid container alignItems="center" pt={4} >
      <Avatar alt="Greg Collis-Brown" src="Greg.jpg" />
               <Box ml={2} textAlign="left">
                 <Typography fontWeight="bold">Greg Collis-Brown</Typography>
               </Box>
             </Grid>
            </Paper>
          </Grid>

          <Grid item lg={6} >
      <Paper elevation={3} sx={{ borderRadius: 5, p: 3, height: '430px' }}>
      <Typography variant="body1"  color="textPrimary" sx={{
       
        
       margin:0.5,
       color: 'text.primary',
       fontSize: '0.96rem',
       lineHeight: '1.6',
      
     }}>
             “I find that my patients really value the patient summary I provide, I always hear that "no other Physio has done this for them before". Clinically I genuinely appreciate encountering notes from my colleagues that have been generated using PatientNotes. These notes are not only legible but also remarkably clear and straightforward to comprehend.”
         </Typography>
         <Grid container alignItems="center" pt={3} >
         <Avatar alt="Matthew Anderson" src="Matthew.jpg" />
               <Box ml={2} textAlign="left">
                 <Typography fontWeight="bold">Matthew Anderson</Typography>
               </Box>
             </Grid>
            </Paper>
          </Grid>
          </Grid>

          </Grid>
         
          <Grid item lg={3} >
      <Paper elevation={3} sx={{ borderRadius: 5, p: 2.83, height: '680px' }}>
      <Typography variant="body1"  color="textPrimary" sx={{
       
        
       margin:0.4,
       color: 'text.primary',
       fontSize: '0.96rem',
       lineHeight: '1.6',
      
     }}>
              “One feature that I particularly like is the ability to verbally conduct the assessment. I inform my patients that I will be using this approach, and they appreciate hearing it. Additionally, being able to verbally indicate the treatment levels, re-assessment plans, and more has significantly enhanced the accuracy of my notes. The feature which particularly saves a lot of time is the ability to generate a GP/specialist letter from the notes. It is well written and quickly generated. This program has truly elevated my note-taking process, and I am excited to keep benefiting from its capabilities. I am very happy with the program overall, and I anticipate significant time savings with continued use.”
         </Typography>
         <Grid container alignItems="center" pt={1} >
         <Avatar alt="Trish Edwards" src="Trish.jpg" />
               <Box ml={2} textAlign="left">
                 <Typography fontWeight="bold">Trish Edwards</Typography>
               </Box>
             </Grid>
            </Paper>
          </Grid>
         
       </Grid>
    </Box>
  );
};
