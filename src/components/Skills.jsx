import * as React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faReact, faGithub, faGitAlt, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faGears, faDatabase, faLaptop } from "@fortawesome/free-solid-svg-icons";


const SkillsContainer = styled(Box) ({
    backgroundColor: '#435670',
    display: 'flex',
    flexDirection: 'column',
    padding: '5rem',

})

const SkillIntro = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    marginTop: '5rem',
    marginBottom: '5rem',

})

const SkillIconContainer = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '1rem',
  

})

const SkillIconRow = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0.5rem',

})

const SingleIconBox = styled(Box) ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: '0.5rem',
    width: '8rem',
    height: '10rem',

})




 function Skills() {
  return (

    // SKILLS INTRO
    <SkillsContainer id='skills'>
        <SkillIntro>
            <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#241C2F', fontWeight: 'bold'}}>
                Skills & Tools
            </Typography>
            <Typography sx={{fontFamily: 'Crimson Text', margin: 1, marginLeft: 10, color: '#F6F2F3', fontSize: {xs: '1.75rem', sm: '3rem'}}}>
                My Creative Toolbox & Cool Things I Can Do
            </Typography>
        </SkillIntro>

        {/*ICONS */}
        <SkillIconContainer sx={{flexDirection: {xs: 'row', sm: 'column'}}}>
            {/* FIRST ROW ICONS */}
            <SkillIconRow sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
                <SingleIconBox>
                    <FontAwesomeIcon icon={faHtml5} style={{color: "#f9fafb", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>HTML5</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <FontAwesomeIcon icon={faCss3} style={{color: "#ffffff", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>CSS</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <FontAwesomeIcon icon={faJs} style={{color: "#ffffff", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>JavaScript</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <FontAwesomeIcon icon={faReact} style={{color: "#ffffff", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>React</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <FontAwesomeIcon icon={faLaptop} style={{color: "#ffffff", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>Responsive Websites</Typography>
                </SingleIconBox>
            </SkillIconRow>

            {/* SECOND ROW ICONS */}
            <SkillIconRow sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
                <SingleIconBox>        
                    <FontAwesomeIcon icon={faGitAlt} style={{color: "#ffffff", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>Git</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>GitHub</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <FontAwesomeIcon icon={faGears} style={{color: "#ffffff", height: 100}} />
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>RESTful APIs</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <img style={{height: 130}}src="./src/assets/otttq59q1hrivd9utlsva6mdg9-7b390df09dc70e1b641188de2bb713fc.png"></img>
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>VS Code</Typography>
                </SingleIconBox>

                <SingleIconBox>
                    <FontAwesomeIcon icon={faDatabase} style={{color: "#ffffff", height: 100}} />                
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>PostgreSQL</Typography>
                </SingleIconBox>
            </SkillIconRow>
        </SkillIconContainer>

        {/* CURRENTLY WORKING ON    */}
            <Box sx={{ marginTop: 10, marginBottom: 10}}> 

            <Typography sx={{fontFamily: 'Crimson Text', fontSize: 35, marginBottom: 4, color: '#241C2F'}}>
                Currenlty working on:
            </Typography>
            <Typography sx={{fontFamily: 'Poppins', fontSize: 25, color: '#F6F2F3'}}>
                Improving my skills in, and understanding of JavaScript and React. 
                Also, having fun learning Material UI and using it in my current projects.
            </Typography>
            </Box>

    </SkillsContainer>
 
  );
}

export default Skills;

// Also, having fun with #100DaysOfCode building & animating things via CSS. Follow My Journey Here.


