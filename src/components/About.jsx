import * as React from 'react';
import { Box, Typography, Stack, Avatar } from '@mui/material';

function About() {
  return (
    <Stack sx={{paddingLeft: 25, paddingRight: 25, paddingTop: 10, paddingBottom: 15, backgroundColor: '#F6F2F3'}} 
    direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}}
    spacing={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}}
    height={{xs: 1600, sm: 1600, md: 1800, lg: 700, xl:650}}
    >

        <Stack sx={{display: 'flex', marginTop: -7}} 
        direction={{xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'column'}}
        spacing={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}}
        >

            <Box sx={{display: 'flex', flexDirection: 'column', width: {
                 xs: 300, sm: 300, md: 300, lg: 300, xl: 350  
            }}}>
                <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#9E4859'}}>
                    About
                </Typography>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 45, margin: 1, marginLeft: 10, color: '#241C2F'}}>
                    Who am I?
                </Typography>
            </Box>

            <Avatar sx={{width: 325, height: 325, marginLeft: 7, boxShadow: 20, marginTop: 2}}alt="Kelsey" src="./src/assets/B9E4DDFA-9462-4478-B0C7-75F216275B7A.jpeg" />
        </Stack>
     
        
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 5, width: {
            xs: 300, sm: 400, md: 1000, lg: 1500, xl: 2000}, 
            height: {xs: 1000, sm: 1000, md: 1000, lg: 600}}}>

            <Box sx={{display: 'flex', flexDirection: 'column', height: 'inherit'}}>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 31, color: '#838FA9'}}>A curiosity-driven Web Developer with design chops.</Typography>
            <br></br>
            <br></br>
            <br></br>
         
                <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>
                    I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details.</Typography>            
            <br></br>
            <br></br>
            <br></br>
                <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>
                    I have a BS in Biology from University of North Florida and a Certificate of Web Development Immersive from Fullstack Academy.
                    I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.</Typography> 
            </Box>
        </Box>
    </Stack>
  );
}

export default About;


