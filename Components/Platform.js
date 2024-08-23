
import { Grid, Typography, Box ,Stack} from '@mui/material';
import Image from 'next/image';

export default function Platform() {
  return (
    <Box sx={{ backgroundColor: '#35606f', padding: '190px 50px ' ,height:'750px' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" color="white"  sx={{fontFamily: '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif ',fontWeight:'bold'}}>
            PatientNotes is compatible with all popular Patient Management Systems
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" spacing={9}>
          <Grid item>
            <Image src="/assets/nookal.webp" alt="Nookal" width={170} height={50} />
          </Grid>
          <Grid item>
            <Image src="/assets/cliniko.webp" alt="Cliniko" width={170} height={50} />
          </Grid>
          <Grid item>
            <Image src="/assets/genie.webp" alt="Genie" width={170} height={50} />
          </Grid>
          <Grid item>
            <Image src="/assets/ppmp.webp" alt="PPMP" width={170} height={50} />
          </Grid>
          <Grid item>
            <Image src="/assets/pracsoft.webp" alt="Pracsoft" width={170} height={50} />
          </Grid>
        </Grid>
        </Grid>
        <Stack direction='row' >
        <Box   mt={15} ml={10}>
          <Typography variant="h3" component="h2" color="white" gutterBottom sx={{fontFamily: '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif '}}>
            Available on all platforms
          </Typography>
       
          <Typography variant="h6" color="white" sx={{width:'580px'}}>
            Whether in-office, home visits, or telehealth consultations, PatientNotes is accessible on multiple devices, ensuring your notes are always at hand. It also integrates seamlessly with your current telehealth platform.
          </Typography>
        </Box>

        <Box mt={20} ml={4}>
            <Image src="/assets/platform-logos.svg" alt="Safari" width={580} height={150} />
          </Box>
        </Stack>
        
          
        
      
      

    </Box>
  );
}
