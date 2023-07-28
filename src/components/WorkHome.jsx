import * as React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGears } from "@fortawesome/free-solid-svg-icons";


function WorkHome() {
    return(

        //WORK INTRO
        <Box sx={{display: 'flex', backgroundColor: '#9E4859', paddingLeft: 25, paddingRight: 25, paddingTop: 15, paddingBottom: 15, flexDirection: 'column'}} >

            {/* WORK HEADER */}
            <Box sx={{display: 'flex', marginBottom: 10, flexDirection: 'column'}}>
                <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#241C2F', fontWeight: 'bold'}}>
                    Projects
                </Typography>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 35, margin: 1, marginLeft: 10, color: '#F6F2F3'}}>
                    Cool Things I have Built
                </Typography>
            </Box>


            {/* PROJECTS */}

            {/* PROJECT 1 */}
            <Stack sx={{display: 'flex', marginBottom: 10, flexDirection: {
                sx: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'
            }}}
            >
                
                <Box component="img" sx={{display: 'flex', justifyContent: 'center', alignSelf: 'center', margin: 3, height: 450, 
                    width: { xs: 400, sm: 500, md: 550, lg: 700, xl: 800}}} 
                    src="./src/assets/games.svg" alt='website screenshot'>
                </Box>



                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Typography sx={{margin: 1, fontFamily: 'Crimson Text', fontSize: 30, color: '#838FA9'}}>
                        Level Up Gaming Reviews
                    </Typography>
                    <br></br>
                    <Typography sx={{margin: 1, fontFamily: 'Poppins', fontSize: 20, color: '#F6F2F3'}}>
                        Full stack software application utilizing React, JavaScript, Node, PostgreSQL, and vanilla HTML/CSS. 
                        Without the use of a modern UI framework, our group was successfully able to produce a ready-for-market product in just 3 weeks. 
                        Our teamwork, communication and collaboration led to the success of the project.
                    </Typography>
                    <br></br>
                    <Stack sx={{margin: 1, justifyContent: 'space-between', width: 250}}
                            direction="row">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#f9fafb", height: 35}} />
                        <FontAwesomeIcon icon={faCss3} style={{color: "#f9fafb", height: 35}} />
                        <FontAwesomeIcon icon={faJs} style={{color: "#f9fafb", height: 35}} />  
                        <FontAwesomeIcon icon={faReact} style={{color: "#f9fafb", height: 35}} /> 
                        <FontAwesomeIcon icon={faDatabase} style={{color: "#f9fafb", height: 35}} /> 
                        <FontAwesomeIcon icon={faGears} style={{color: "#f9fafb", height: 35}} /> 


                    </Stack>
                    {/* ADD BUTTON FUNCTIONALITY */}
                    {/* https://levelup-games.netlify.app/ */}
                    <Button sx={{margin: 1, backgroundColor: '#838FA9', color: '#241C2F', fontSize: 20, height: 60, width: 200}}>View It Here</Button>
                </Box>
            </Stack>

            {/* PROJECT 2 */}

            <Stack sx={{display: 'flex', marginBottom: 10, flexDirection: {
                sx: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'
            }}}
            >
                
                <Box component="img" sx={{display: 'flex', justifyContent: 'center', alignSelf: 'center', margin: 3, height: 450, 
                    width: { xs: 400, sm: 500, md: 550, lg: 700, xl: 800}}} 
                    src="./src/assets/strangers.svg" alt='website screenshot'>
                </Box>



                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Typography sx={{margin: 1, fontFamily: 'Crimson Text', fontSize: 30, color: '#838FA9'}}>
                        Strangers' Things
                    </Typography>
                    <br></br>
                    <Typography sx={{margin: 1, fontFamily: 'Poppins', fontSize: 20, color: '#F6F2F3'}}>
                        Full stack software application utilizing React, JavaScript, Node, and vanilla HTML/CSS. 
                        Without the use of a modern UI framework, I was successfully able to produce a ready-for-market product in just a week. 
                    </Typography>
                    <br></br>
                    <Stack sx={{margin: 1, justifyContent: 'space-between', width: 190}}
                            direction="row">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#f9fafb", height: 35}} />
                        <FontAwesomeIcon icon={faCss3} style={{color: "#f9fafb", height: 35}} />
                        <FontAwesomeIcon icon={faJs} style={{color: "#f9fafb", height: 35}} />  
                        <FontAwesomeIcon icon={faReact} style={{color: "#f9fafb", height: 35}} /> 
                        <FontAwesomeIcon icon={faGears} style={{color: "#f9fafb", height: 35}} /> 
                    </Stack>

                    {/* ADD BUTTON FUNCTIONALITY */}
                    {/* https://strangersthingsproject.netlify.app/ */}
                    <Button sx={{margin: 1, backgroundColor: '#838FA9', color: '#241C2F', fontSize: 20, height: 60, width: 200}}>View It Here</Button>
                </Box>
            </Stack>

            {/* WORK MORE */}
            <Box sx={{display: 'flex', marginBottom: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 30, color: '#F6F2F3'}}>
                    To see more projects that I have built, click the button below!
                </Typography>
                <br></br>
                <br></br>
                {/* ADDD LINK */}
                <Button sx={{backgroundColor: '#241C2F', color: '#F6F2F3', fontSize: 20, height: 60, width: 250}}>More Projects</Button>

            </Box>
        
        
        
        
        
        </Box>    


    )
}

export default WorkHome;