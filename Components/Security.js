import { Box, Container, Typography, Grid, Button } from '@mui/material';
import ComplianceCard from './ComplianceCard'; 

export default function ComplianceSection()  {
 
  const cardData = [
    {
      imageSrc: "/assets/hipaa.svg",
      imageAlt: "HIPAA compliance",
      title: "HIPAA compliance",
      description: "We meet all HIPAA requirements to ensure the confidentiality and security of Protected Health Information (PHI).",
      buttonText: "Understand how PatientNotes complies with HIPAA",
      buttonLink: "/privacy-and-compliance/hipaa"
    },
    {
      imageSrc: "/assets/gdpr.svg",
      imageAlt: "GDPR compliance",
      title: "GDPR compliance",
      description: "We follow the data regulations established by the GDPR, UK GDPR, and UK Data Protection Act to ensure the privacy and security of personal data for individuals within the EU and UK.",
      buttonText: "Read about how PatientNotes complies with GDPR",
      buttonLink: "/privacy-and-compliance/gdpr"
    },
    {
      imageSrc: "/assets/ausprivacy.svg",
      imageAlt: "Australian Privacy Act 1998",
      title: "Australian Privacy Act 1998",
      description: "PatientNotes is fully compliant with the Australian Privacy Act 1998 and the Australian Privacy Principles.",
      buttonText: "Understand how PatientNotes complies with the Australian Privacy Principles",
      buttonLink: "/privacy-and-compliance/australian-privacy-act-1998"
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f9fafb', py: { xs: 16, sm: 16 }, px: 4 }}>
      <Container maxWidth="xl">
        <Box maxWidth="md" mx="auto" textAlign="center">
          <Typography
            variant="h2"
            sx={{
              mt: 2,
              mb: 6,
              fontWeight: 'bolder',
              fontSize: { xs: '3xl', sm: '45px' },
              color: '#29576b',
              fontFamily: 'var(--font-libre)',
            }}
          >
            Ensure the security and compliance of <br>
            </br>your healthcare practice
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, color: '#6b7280', fontWeight: 300 , textAlign:'center'}}
          >
            PatientNotes prioritizes the security and confidentiality of your patients’ data. 
            Our platform meets the highest standards for AI applications in medical clinics and hospitals.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/security"
            
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
            Read about PatientNotes' dedication to security
          </Button>
        </Box>

        <Grid container spacing={{ xs: 6, lg: 2 }} sx={{ mt: { xs: 12, lg: 16 } , mx:'auto'}}>
          {cardData.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ComplianceCard
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


