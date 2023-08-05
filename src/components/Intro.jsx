import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import mountains from '../assets/mountains.jpg'
import Typed from 'typed.js';
import './intro.css';
import { useRef, useEffect } from 'react';




const IntroBackground = styled(Box)({
    width: "100%",
    height: "100%",
    backgroundImage: `url(${mountains})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: 'flex', 
    flexDirection: 'column',

})

const IntroText = styled(Box) ({
    width: "75%",
    display: 'flex',
    flexDirection: 'column',


})



function Intro() {
    const changingText = useRef(null);

    // TYPE EFFECT
    useEffect(() => {
        const typed = new Typed(changingText.current, {
            strings: ["Traveler 🛫", "Painter 🎨", "Dog Mom 🐶", "Gardner 🪴" ],
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 150,
            backDelay: 300,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: " ."
        });
        return () => {
            typed.destroy();
        };
    }, []);


    return(
        <IntroBackground id='home'>
       
            <IntroText sx={{margin: { xs: '5rem', sm: '8rem', md: '10rem'}}}>
                <Typography fontFamily={'Poppins'} color={'rgb(224, 222, 222)'} sx={{fontSize: {xs: '1.5rem', sm: '2.5rem', md: '3rem', lg: '4rem'}}}>
                    Hi there, I'm Kelsey!
                </Typography>
                <Typography fontFamily={'Poppins'} color={'rgb(224, 222, 222)'} sx={{fontSize: {xs: '1.5rem', sm: '2rem', md: '3rem', lg: '4rem'}}}>
                    I'm an aspiring Web Developer and a <span ref={changingText} fontFamily={'Poppins'} color={'rgb(224, 222, 222)'} sx={{fontSize: {xs: '1.5rem', sm: '2rem', md: '3rem', lg: '4rem'}}}></span>
                </Typography>
            </IntroText>
         
        </IntroBackground>
    )
}

export default Intro;

