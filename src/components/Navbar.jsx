import * as React from 'react';
import { Box, Button, Toolbar, Typography, Fab } from '@mui/material';
import { Link } from 'react-router-dom';





function NavBar() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, height: 100}}>
        <Toolbar sx={{display: 'flex', height: 120, justifyContent: 'space-between', border: 'solid', width: {
            xs: 100, sm: 600, md: 2000, lg: 2000, xl: 2000
        }}}>
            <Box sx={{display: 'flex', width: {
                xs: 100, sm: 600, md: 800, lg: 800, xl: 800
            }, height: 60, justifyContent: 'space-around', alignItems: 'center'}}>
                
                <Typography component={Link} sx={{ fontSize: 15, color: 'rgb(224, 222, 222)', fontFamily: 'Poppins', letterSpacing: 2, textDecoration: "none"}}>
                    Home
                </Typography>
                <Typography component={Link} sx={{ fontSize: 15, color: 'rgb(224, 222, 222)', fontFamily: 'Poppins', letterSpacing: 2, textDecoration: "none"}}>
                    About
                </Typography>
                <Typography component={Link} sx={{ fontSize: 15, color: 'rgb(224, 222, 222)', fontFamily: 'Poppins', letterSpacing: 2, textDecoration: "none"}}>
                    Skills
                </Typography>
                <Typography component={Link} sx={{ fontSize: 15, color: 'rgb(224, 222, 222)', fontFamily: 'Poppins', letterSpacing: 2, textDecoration: "none"}}>
                    Projects
                </Typography>
                <Typography component={Link} sx={{ fontSize: 15, color: 'rgb(224, 222, 222)', fontFamily: 'Poppins', letterSpacing: 2, textDecoration: "none"}}>
                    Contact Me
                </Typography>
            </Box>



      
                <Button sx={{display: 'flex', width: 5, fontSize: 10, border: 'solid', color: '#45162D', borderRadius: 5, height: 40, position: 'fixed', backgroundColor: 'rgb(224, 222, 222)', marginTop: 15 }}>
                    Resume
                </Button>

          
 




            {/* Add onClick */}
            {/* <Box sx={{display: 'flex', border: 'solid', height: 60}}>
                <Button sx={{ fontSize: 14, color: 'rgb(224, 222, 222)', fontFamily: 'Poppins'}}>
                    Resume
                </Button>
            </Box> */}
        </Toolbar>
    </Box>
  );
}

export default NavBar;
