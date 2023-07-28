import * as React from 'react';
import { Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




function NavBar() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, height: 100}}>
        <Toolbar sx={{display: 'flex', height: 120, justifyContent: 'space-between', border: 'solid', width: {
            xs: 100, sm: 600, md: 800, lg: 1500, xl: 2000
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

            {/* Add onClick */}
            <Box sx={{display: 'flex', border: 'solid', height: 60}}>
                <Button sx={{ fontSize: 14, color: 'rgb(224, 222, 222)', fontFamily: 'Poppins'}}>
                    Resume
                </Button>
            </Box>
        </Toolbar>
    </Box>
  );
}

export default NavBar;
