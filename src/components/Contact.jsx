import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';


function Contact() {
    return(

        //CONTACT INTRO
        <Box sx={{display: 'flex', backgroundColor: '#F6F2F3', paddingLeft: 25, paddingRight: 25, paddingTop: 15, paddingBottom: 15, flexDirection: 'column'}} >

                {/* CONTACT HEADER */}
                <Box sx={{display: 'flex', marginBottom: 10, flexDirection: 'column'}}>
                    <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#241C2F', fontWeight: 'bold'}}>
                        Contact
                    </Typography>
                    <Typography sx={{fontFamily: 'Crimson Text', fontSize: 35, margin: 1, marginLeft: 10, color: '#45162D'}}>
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
                </Box>

            {/* TROUBLESHOOT ONCE DEPLOY */}
            {/* INPUTS */}
                <Stack component="form" sx={{display: 'flex', justifyContent: 'space-evenly', 
                    width: { xs: 300, sm: 400, md: 'inherit', large: 'inherit', xl: 'inherit'}, flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}}}>


                    <label htmlFor='message'>
                    <form action="https://formsubmit.co/kgaz410@gmail.com" method="POST"
                        style={{padding: 5, display: 'flex', flexDirection: 'column', height: 500, justifyContent: 'space-evenly', minWidth: 250, maxWidth: 450}}>
                        
                        <TextField 
                            required
                            id="filled-basic"
                            label="Name"
                            variant='filled'
                            // defaultValue='Name'
                            sx={{borderBottom: "solid", borderRight: 'solid', borderRightColor: '#435670', borderBottomColor: '#435670', borderRadius: 2}}
                            />

                         <TextField 
                            required
                            id="filled-email"
                            label="Email"
                            variant='filled'
                            sx={{borderBottom: "solid", borderRight: 'solid', borderRightColor: '#435670', borderBottomColor: '#435670', borderRadius: 2}}

                            />

                        <TextField
                            required
                            rows={8}
                            multiline
                            id="filled-multiline"
                            label="Message"
                            variant='filled'
                            sx={{borderBottom: "solid", borderRight: 'solid', borderRightColor: '#435670', borderBottomColor: '#435670', borderRadius: 2}}

                            />   
                          
                        <Button type="submit" sx={{ alignSelf: 'center', backgroundColor: '#45162D', color: '#F6F2F3', fontSize: 20, height: 60, width: 200}}>Send</Button>
                    </form>

                    </label>

                    <Box sx={{padding: 5}}>
                        <Typography sx={{fontFamily: 'Poppins', fontSize: 22, color: '#241C2F', fontWeight: 'bolder'}}>
                            Feeling social?
                            <br></br> 
                            <br></br>
                            Find me on these online spaces too!
                        </Typography>

                        <br></br>

                        <Box sx={{display: 'flex',justifyContent: 'space-evenly'}}>
                            <Link href="https://www.linkedin.com/in/kelseygazaway/">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#435670',height: 50}} />
                            </Link>
                            <Link href="https://github.com/kgaz410">
                                <FontAwesomeIcon icon={faSquareGithub} style={{ color: '#435670',height: 50}} />
                            </Link>
                        </Box>

                    </Box>


                </Stack>




        </Box>
    )

}

export default Contact;