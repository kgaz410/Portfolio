import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faReact, faGithub, faGitAlt, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";


 function Skills() {
  return (

    // SKILLS INTRO
    <Box sx={{ display: 'flex', backgroundColor: '#435670', paddingLeft: 25, paddingRight: 25, paddingTop: 15, paddingBottom: 15, flexDirection: 'column'}} >

        <Box sx={{display: 'flex', marginBottom: 5, flexDirection: 'column'}}>
            <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: '#241C2F', fontWeight: 'bold'}}>
                Skills & Tools
            </Typography>
            <Typography sx={{fontFamily: 'Crimson Text', fontSize: 35, margin: 1, marginLeft: 10, color: '#F6F2F3'}}>
                My Creative Toolbox & Cool Things I Can Do
            </Typography>
        </Box>
        
     
     {/* 1 ROW ICONS */}
     <Box sx={{display: 'flex'}}
            flexDirection={{xs: 'row', sm: 'row', md: 'column', lg: 'column', xl: 'column'}}
            justifyContent={{xs: 'space-evenly'}} >

            

        <Stack sx={{display: 'flex', marginBottom: 3, justifyContent: 'space-evenly'}}
                direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}} >


            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <FontAwesomeIcon icon={faHtml5} style={{color: "#f9fafb", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>HTML5</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <FontAwesomeIcon icon={faCss3} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>CSS</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <FontAwesomeIcon icon={faJs} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>JavaScript</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <FontAwesomeIcon icon={faReact} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>React</Typography>
            </Box>
        </Stack>
        


        {/* 2 ROW ICONS */}
        <Stack sx={{display: 'flex', marginBottom: 3, justifyContent: 'space-evenly'}}
                   direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}} >

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <FontAwesomeIcon icon={faGitAlt} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>Git</Typography>
            </Box>


            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>GitHub</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <FontAwesomeIcon icon={faGears} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>RESTful APIs</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', width: 100, height: 150}}>
                <img style={{height: 130}}src="./src/assets/otttq59q1hrivd9utlsva6mdg9-7b390df09dc70e1b641188de2bb713fc.png"></img>
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>VS Code</Typography>
            </Box>
        </Stack>
     </Box>



     {/* CURRENTLY WORKING ON    */}
     <Box sx={{ marginTop: 10}}> 

        <Typography sx={{fontFamily: 'Crimson Text', fontSize: 35, marginBottom: 4, color: '#241C2F'}}>
            Currenlty working on:
        </Typography>
        <Typography sx={{fontFamily: 'Poppins', fontSize: 25, color: '#F6F2F3'}}>
            Improving my skills in, and understanding of JavaScript and React. 
            Also, having fun learning Material UI and using it in my current projects.
        </Typography>
     </Box>



    </Box>
  );
}

export default Skills;

// Also, having fun with #100DaysOfCode building & animating things via CSS. Follow My Journey Here.

