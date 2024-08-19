import { Link,Grid, Card, Typography, TextField, Button, Checkbox, FormControlLabel, Box, FormControl, InputLabel } from '@mui/material';

import Image from 'next/image';
import { SvgIcon } from '@mui/material';

export default function Chat() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height:'800px', width: '100%', background:'linear-gradient(to left,#ddf4ec,#c3e5e9)' }}>
      <Grid item xs={12} md={11} lg={10}>
        <Card elevation={0} style={{ padding: '32px',background:'linear-gradient(to left,#ddf4ec,#c3e5e9)' , borderRadius: '12px' }}>
          <Grid container spacing={4}>
        
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="flex-start" mt={14} ml={7}  >
                <Box display="flex" alignItems="center" marginBottom={2}>
                  <Box
                    width={40}
                    height={40}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="#6CC4A1"
                    borderRadius="50%"
                  >
                  
                    <Box
      sx={{
        height: '2.5rem', 
        width: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.75rem', 
        backgroundColor: '#29576a', 
          
          
      }}
    >
      <SvgIcon
        sx={{ height: '1.9rem', width: '1.9rem', color: '#29576a' }}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        fill="none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </SvgIcon>
    </Box>
                  </Box>
                 
                </Box>
                <Typography variant="h4" style={{ color: '#004d40' }} >
                    Chat with our team
                  </Typography>
                <Typography variant="body1"  mt={2} mb={4} style={{ color: '#004d40' }}>
                  Want to learn about PatientNotes? Need help getting started?
                  <br></br>
                  Meet one of our team members in a quick intro call.
                </Typography>
                <Image src="/chat.jpg" alt="Team Chat" width={450} height={350} layout="intrinsic" />
              </Box>
            </Grid>

           
            <Grid item xs={12} md={5}>
            <Box padding="24px" backgroundColor="#f9fafb" borderRadius="12px" sx={{ height: '660px' }}>
  <Typography 
    variant="h4" 
    gutterBottom 
    sx={{ 
      color: '#29576a', 
      fontWeight: 'bold', 
      fontFamily: '__Poppins_36e2ef, __Poppins_Fallback_36e2ef, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    }}
  >
                  Book a 1:1
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'18px' }} shrink>First name</InputLabel>
                      <TextField fullWidth variant="outlined" margin="normal"   InputProps={{ sx: { height: '30px' ,
                       backgroundColor: '#ffffff'} }} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'18px' }} shrink>Last name
                    </InputLabel>
                      <TextField fullWidth variant="outlined" margin="normal"   InputProps={{ sx: { height: '30px' ,
                       backgroundColor: '#ffffff'} }} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'18px' }} shrink>Work Email</InputLabel>
                      <TextField fullWidth variant="outlined" margin="normal"   InputProps={{ sx: { height: '30px' ,
                       backgroundColor: '#ffffff'} }} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'18px' }} shrink>Country</InputLabel>
                      <TextField fullWidth variant="outlined" margin="normal"   InputProps={{ sx: { height: '30px' ,
                       backgroundColor: '#ffffff'} }} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'18px' }} shrink>Profession</InputLabel>
                      <TextField fullWidth variant="outlined" margin="normal"   InputProps={{ sx: { height: '30px' ,
                       backgroundColor: '#ffffff'} }} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'18px'}} shrink>Practice Management System / EMR</InputLabel>
                      <TextField fullWidth variant="outlined" margin="normal"   InputProps={{ sx: { height: '30px' ,
                       backgroundColor: '#ffffff'} }} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                    <InputLabel sx={{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'18px' }} shrink>Approximately how many clinicians are in your practice?</InputLabel>
                      <TextField fullWidth variant="outlined" margin="normal"   InputProps={{ sx: { height: '30px' ,
                       backgroundColor: '#ffffff'} }} />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel 
                        control={<Checkbox color="primary"  s/>}
                        label={
                          <>
                            Opt-in to PatientNotes emails (required for calendar invites). Read our{' '}
                            <Link href="/privacy-policy" passHref>
                              <Typography component="a" sx={{ color: '#29576a', fontWeight: 'bold', fontSize: '13px' }}>
                                Privacy Policy
                              </Typography>
                            </Link>
                          </>
                        }
                       
                        sx={{'& .MuiFormControlLabel-label':{ color: '#29576a' ,fontWeight:'bold' ,fontSize:'13px' }}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained"   sx={{ backgroundColor: 'rgb(193, 240, 214)', color:'rgb(41 ,87, 106 )',borderRadius:'28px', padding:'5px 5px' ,
          fontSize: '13px',
          height:'40px',
          textTransform: 'none', 
            fontWeight: 'bold',
          width:'80px',
          marginTop:'17px',
          '&:hover': {
            backgroundColor: '#7be8a8', 
            color: 'rgb(35, 68, 91)', 
                             }
        }} >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
