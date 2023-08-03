import * as React from 'react';
import { styled } from '@mui/system';

import { Box, Typography, Avatar } from '@mui/material';


const AboutContainer = styled(Box) ({
    backgroundColor: '#F6F2F3',
    display: 'flex',
    padding: '5rem',

})

const AboutBox = styled(Box) ({
    display: 'flex',
    width: 'inherit',
    marginTop: '5rem',
    marginBottom: '5rem',


})

const AboutIntroPic = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    padding: '1rem',

})

const AboutPara = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    padding: '1rem',

  
})

function About() {
  return (
    <AboutContainer sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
        <AboutBox sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
            <AboutIntroPic>
                <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#9E4859'}}>
                    About
                </Typography>
                <Typography sx={{fontFamily: 'Crimson Text', margin: 1, marginLeft: 10, color: '#241C2F', fontSize: {xs: '1.75rem', sm: '3rem'}}}>
                    Who am I?
                </Typography>

                <Avatar sx={{boxShadow: 20, marginTop: '2rem', width: {xs: '15rem', sm: '25rem'}, height: {xs: '15rem', sm: '25rem'}}}
                    alt="Kelsey" src="./src/assets/B9E4DDFA-9462-4478-B0C7-75F216275B7A.jpeg" />

            </AboutIntroPic>
         
            <AboutPara>
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
            </AboutPara>
        </AboutBox>

    </AboutContainer>
  
  );
}

export default About;

