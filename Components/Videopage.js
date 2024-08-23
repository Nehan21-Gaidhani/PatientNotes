
import { Box, Typography, Button, Stack } from '@mui/material';

export default function ExamplePage() {
    return (
        <Box sx={{ background: 'linear-gradient(to top,rgb(195,229,233) 70%,rgb(217,242,235))', padding: '50px 20px', height: '1240px' }}>
            
            <Box sx={{ textAlign: 'center', marginBottom: '90px', marginTop:'70px' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', color: '#1e4d65', fontWeight: 'bold', marginBottom: '5px' }}>
                    Getting Started
                </Typography>

                <Typography variant="h4" sx={{ fontFamily: 'var(--font-libre), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif', color: '#1e4d65', fontWeight: 'bold' }}>
                    See how PatientNotes works
                </Typography>
            </Box>

           
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
                <video 
                   width="1215" 
                   height="690" 
                   controls 
                   style={{ borderRadius: '15px', overflow: 'hidden' }}
                >   <source src="/assets/demo2.mp4" type="video/mp4" ></source></video>
                
            </Box>

            <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: 'rgb(25 69 143)', 
                        color: '#fff', 
                        textTransform: 'none', 
                        padding: '2px 2px', 
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        height:'42px',
                        width: '365px',
                        '&:hover': {
                            backgroundColor: '#7be8a8', 
                            color: 'rgb(35, 68, 91)', 
                        }
                    }}
                >
                    Try it now - less than 2 minutes to get started
                </Button>
                <Button 
                    variant="contained" 
                    sx={{ 
                       
                        color: '#305f73', 
                        textTransform: 'none', 
                        padding: '8px 18px', 
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        width: '190px',
                        backgroundColor:'#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#7be8a8', 
                            color: 'rgb(35, 68, 91)', 
                                             }
                    }}
                >
                   <a href="/demo">📞 Speak to our team</a> 
                </Button>
            </Stack>
        </Box>
    );
}
