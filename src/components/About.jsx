import * as React from 'react';
import { Box, Typography, Stack, Avatar } from '@mui/material';

function About() {
  return (
    <Stack sx={{paddingLeft: 25, paddingRight: 25, paddingTop: 10, height: 650, backgroundColor: '#F6F2F3'}} direction="row" spacing={5}>

        <Stack sx={{display: 'flex', flexDirection: 'column', marginTop: -7}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#9E4859'}}>
                    About
                </Typography>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 45, margin: 1, marginLeft: 10, color: '#241C2F'}}>
                    Who am I?
                </Typography>
            </Box>

            <Avatar sx={{width: 325, height: 325, marginLeft: 7, boxShadow: 20, marginTop: 2}}alt="Kelsey" src="./src/assets/B9E4DDFA-9462-4478-B0C7-75F216275B7A.jpeg" />
        </Stack>
     
        
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 5}}>
            <Box>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 31, color: '#838FA9'}}>A curiosity-driven Web Developer with design chops.</Typography>
            <br></br>
            <br></br>
            <br></br>
         
                <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details.</Typography>            <br></br>
            <br></br>
            <br></br>
                <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>I have a BS in Biology from University of North Florida and a Certificate of Web Development Immersive from Fullstack Academy.
                    I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.</Typography> 
            </Box>
        </Box>
    </Stack>
  );
}

export default About;


