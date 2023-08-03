import * as React from 'react';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';


const ContactContainer = styled(Box) ({
    backgroundColor: '#F6F2F3',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',


})

const ContactIntro = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    marginTop: '5rem',
    marginBottom: '5rem',
    padding: '1rem',

})

const ContactFormBox = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5rem',
    marginBottom: '5rem',
  

})

const ContactInputsBox = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '1rem',
    flexDirection: 'column',
    marginBottom: '2rem',
 

})

const FeelingSocialBox = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '1rem',
    flexDirection: 'column',
    marginBottom: '2rem',
  
})




function Contact() {
    return(

        //CONTACT INTRO
            <ContactContainer>
                {/* CONTACT HEADER */}
                <ContactIntro>
                    <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#241C2F', fontWeight: 'bold'}}>
                        Contact
                    </Typography>
                    <Typography sx={{fontFamily: 'Crimson Text', margin: 1, marginLeft: 10, color: '#45162D', fontSize: {xs: '1.75rem', sm: '3rem'}}}>
                        Get In Touch
                    </Typography>
                <br></br>
                <br></br>
                <br></br>

                    <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>
                        Dropping a line to say hi or ask for my resume? 
                        <br></br>
                        I’d love to hear from you!
                    </Typography> 
                <br></br>
                <br></br>
                <br></br>
                    <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>
                    Fill in your info in the form below and I look forward to hearing from you!                    
                    </Typography> 
                </ContactIntro>

                {/* MAIN FORM BOX */}
                <ContactFormBox sx={{flexDirection: {xs: 'column', sm: 'column', md: 'row'}, height: {xs: '35rem'}}}>
                    <ContactInputsBox action="https://formsubmit.co/kgaz410@gmail.com" method="POST" sx={{width: {xs: 'inherit', sm: 'inherit', md: '50%'}}}>
                        <TextField required fullWidth label="Name" id="fullWidth"/>
                        <TextField required fullWidth label="Email" id="fullWidth" />
                        <TextField required fullWidth multiline rows={5} label="Message" id="fullWidth" />

                        <Button type="submit" sx={{ margin: '1rem', alignSelf: 'center', backgroundColor: '#45162D', color: '#F6F2F3', fontSize: 20, height: 60, width: {xs: 'inherit', sm: '8rem'}}}>Send</Button>

                    </ContactInputsBox>

                    <FeelingSocialBox sx={{width: {xs: 'inherit', sm: 'inherit'}}}>
                        <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>
                            Feeling social?
                            <br></br> 
                            <br></br>
                            Find me on these online spaces too!
                        </Typography>

                            <br></br>

                        <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <Link href="https://www.linkedin.com/in/kelseygazaway/">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#435670',height: 50}} />
                            </Link>
                            <Link href="https://github.com/kgaz410">
                                <FontAwesomeIcon icon={faSquareGithub} style={{ color: '#435670',height: 50}} />
                            </Link>
                        </Box>
                    </FeelingSocialBox>

                </ContactFormBox>

            </ContactContainer>

    )

}

export default Contact;

