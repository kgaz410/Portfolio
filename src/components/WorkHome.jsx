import * as React from 'react';
import { styled } from '@mui/system';
import { Box, Button, Stack, Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGears } from "@fortawesome/free-solid-svg-icons";


const WorkContainer = styled(Box) ({
    backgroundColor: '#9E4859',
    display: 'flex',
    flexDirection: 'column',
    padding: '5rem',


})

const WorkIntro = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    marginTop: '5rem',
  


})

const ProjectsContainer = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '1rem',
 

})

const SingleProjectBox = styled(Box) ({
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: '0.5rem',
    margin: '1rem',
 

})


function WorkHome() {


    return(

        //WORK INTRO
        <WorkContainer id='projects'>
            {/* WORK HEADER */}
            <WorkIntro>
                <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#241C2F', fontWeight: 'bold'}}>
                    Projects
                </Typography>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 35, margin: 1, marginLeft: 10, color: '#F6F2F3'}}>
                    Cool Things I Have Built
                </Typography>

            </WorkIntro>


            {/* PROJECTS */}
            <ProjectsContainer>

                {/* PROJECT 1 */}
                <SingleProjectBox sx={{flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row'}}}>
                    <Box component="img" sx={{display: 'flex', justifyContent: 'center', alignSelf: 'center', margin: 3, height: 350, 
                        width: { xs: 400, sm: 500, md: 550, lg: 650, xl: 800}}} 
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
                        <Stack sx={{margin: 1, justifyContent: 'space-between', width: {xs: '14rem', sm: '15rem'}}}
                                direction="row">
                            <FontAwesomeIcon icon={faHtml5} style={{color: "#f9fafb", height: 35}} />
                            <FontAwesomeIcon icon={faCss3} style={{color: "#f9fafb", height: 35}} />
                            <FontAwesomeIcon icon={faJs} style={{color: "#f9fafb", height: 35}} />  
                            <FontAwesomeIcon icon={faReact} style={{color: "#f9fafb", height: 35}} /> 
                            <FontAwesomeIcon icon={faDatabase} style={{color: "#f9fafb", height: 35}} /> 
                            <FontAwesomeIcon icon={faGears} style={{color: "#f9fafb", height: 35}} /> 


                        </Stack>
                    
                        {/* https://levelup-games.netlify.app/ */}
                        <Link href='https://levelup-games.netlify.app/'>
                            <Button sx={{margin: 1, backgroundColor: '#838FA9', color: '#241C2F', fontSize: 20, height: 60, width: 200}}>View It Here</Button>
                        </Link>

                        <Link href="https://github.com/14-21/Frontend-Capstone">
                            <Button sx={{margin: 1, backgroundColor: '#838FA9', color: '#241C2F', fontSize: 20, height: 60, width: 200}}>View Code</Button>
                        </Link>
                    </Box>
                </SingleProjectBox>



                {/* PROJECT 2 */}
                <SingleProjectBox sx={{flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row'}}}>
                    <Box component="img" sx={{display: 'flex', justifyContent: 'center', alignSelf: 'center', margin: 3, height: 350, 
                        width: { xs: 400, sm: 500, md: 550, lg: 650, xl: 800}}} 
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
                        <Stack sx={{margin: 1, justifyContent: 'space-between', width: {xs: '14rem', sm: '15rem'}}}
                                direction="row">
                            <FontAwesomeIcon icon={faHtml5} style={{color: "#f9fafb", height: 35}} />
                            <FontAwesomeIcon icon={faCss3} style={{color: "#f9fafb", height: 35}} />
                            <FontAwesomeIcon icon={faJs} style={{color: "#f9fafb", height: 35}} />  
                            <FontAwesomeIcon icon={faReact} style={{color: "#f9fafb", height: 35}} /> 
                            <FontAwesomeIcon icon={faGears} style={{color: "#f9fafb", height: 35}} /> 
                        </Stack>
                    
                    
                     {/* https://strangersthingsproject.netlify.app/ */}
                        <Link href="https://strangersthingsproject.netlify.app/">
                            <Button sx={{margin: 1, backgroundColor: '#838FA9', color: '#241C2F', fontSize: 20, height: 60, width: 200}}>View It Here</Button>
                        </Link>

                        <Link href="https://github.com/kgaz410/Strangers-Things/">
                            <Button sx={{margin: 1, backgroundColor: '#838FA9', color: '#241C2F', fontSize: 20, height: 60, width: 200}}>View Code</Button>
                        </Link>
                    </Box>
                </SingleProjectBox>
            </ProjectsContainer>

             {/* WORK MORE */}
            <br></br>
            <br></br>
             <Box sx={{display: 'flex', marginBottom: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{fontFamily: 'Crimson Text', fontSize: 30, color: '#F6F2F3'}}>
                    More projects coming soon !
                </Typography>
            
            </Box>

        </WorkContainer>

    )
}

export default WorkHome;



 {/* WORK MORE */}
{/* //  <Box sx={{display: 'flex', marginBottom: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//  <Typography sx={{fontFamily: 'Crimson Text', fontSize: 30, color: '#F6F2F3'}}>
//      To see more projects that I have built, click the button below!
//  </Typography>
//  <br></br>
//  <br></br> */}
 {/* ADDD LINK */}
 {/* <Button sx={{backgroundColor: '#241C2F', color: '#F6F2F3', fontSize: 20, height: 60, width: 250}}>More Projects</Button>

</Box> */}

     