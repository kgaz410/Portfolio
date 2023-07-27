import * as React from 'react';
import { Avatar, Box, Icon, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faReact, faGithub, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";


 function Skills() {
  return (
    <Box sx={{ display: 'flex', border: 'solid', backgroundColor: '#435670', paddingLeft: 25, paddingRight: 25, paddingTop: 10, flexDirection: 'column'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', border: 'solid', borderColor: "white"}}>
            <Typography sx={{fontFamily: 'Poppins', fontSize: 25, margin: 1, color: 'white'}}>
                Skills & Tools
            </Typography>
            <Typography sx={{fontFamily: 'Crimson Text', fontSize: 35, margin: 1, marginLeft: 10, color: '#241C2F'}}>
                My Creative Toolbox & Cool Things I Can Do
            </Typography>
        </Box>
        
     
     <Box sx={{display: 'flex', flexDirection: 'column', border: 'solid', borderColor: "white"}}>
        <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', border: 'solid', borderColor: "red"}}>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <FontAwesomeIcon icon={faHtml5} style={{color: "#f9fafb", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>HTML5</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <FontAwesomeIcon icon={faJs} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>CSS</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <FontAwesomeIcon icon={faJs} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>JavaScript</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <FontAwesomeIcon icon={faReact} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>React</Typography>
            </Box>


        </Stack>
        
        <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', border: 'solid', borderColor: "red"}}>
            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <FontAwesomeIcon icon={faGitAlt} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>Git</Typography>
            </Box>


            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>GitHub</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <FontAwesomeIcon icon={faGears} style={{color: "#ffffff", height: 100}} />
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>RESTful APIs</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between', height: 150, border: 'solid', borderColor: 'green'}}>
                <img style={{height: 130}}src="./src/assets/otttq59q1hrivd9utlsva6mdg9-7b390df09dc70e1b641188de2bb713fc.png"></img>
                <Typography sx={{textAlign: 'center', color: 'white', fontSize: 20}}>VS Code</Typography>
            </Box>




        </Stack>
     </Box>
    </Box>
  );
}

export default Skills;
