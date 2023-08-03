import { Box, Button, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import './intro.css';
import { useState } from 'react';



const imageURL = "src/assets/john-towner-JgOeRuGD_Y4-unsplash.jpg"

const IntroBackground = styled(Box)({
    width: "100%",
    height: "100%",
    backgroundImage:`url(${imageURL})`,
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

const Navbar = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',


})

const LinkStyle = styled(Typography) ({
    color: 'rgb(224, 222, 222)',
    textDecoration: 'none',
    fontFamily: 'Poppins', 
})

function Intro() {
    const [open, setOpen] = useState(false)

    return(
        <IntroBackground>
            <Navbar>
                <Toolbar sx={{border: 'solid', width: '60%', display: 'flex', justifyContent: 'space-between'}}>

                {/* DROPDOWN MENU */}
                <MenuIcon sx={{color: 'rgb(224, 222, 222)', display: {xs: 'block', sm: 'none'}}}
                onClick={e => setOpen(true)}
                ></MenuIcon>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem component={Link}>Home</MenuItem>
                    <MenuItem component={Link}>About</MenuItem>
                    <MenuItem component={Link}>Skills</MenuItem>
                    <MenuItem component={Link}>Projects</MenuItem>
                    <MenuItem component={Link}>Contact Me</MenuItem>
                    <MenuItem component={Link}>Resume</MenuItem>
                </Menu>



                    <LinkStyle component={Link} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Home
                    </LinkStyle>

                    <LinkStyle component={Link} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        About
                    </LinkStyle>

                    <LinkStyle component={Link} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Skills
                    </LinkStyle>

                    <LinkStyle component={Link} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Projects
                    </LinkStyle>

                    <LinkStyle component={Link} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Contact Me
                    </LinkStyle>
                </Toolbar>
                <Button sx={{ display: {xs: 'none', sm: 'block'}}}>RESUME</Button>
            </Navbar>


       
            <IntroText sx={{margin: { xs: '5rem', sm: '8rem', md: '10rem'}}}>
                <Typography fontFamily={'Poppins'} color={'rgb(224, 222, 222)'} sx={{fontSize: {xs: '1.5rem', sm: '2.5rem', md: '3rem', lg: '4rem'}}}>
                    Hi there, I'm Kelsey!
                </Typography>
                <Typography fontFamily={'Poppins'} color={'rgb(224, 222, 222)'} sx={{fontSize: {xs: '1.5rem', sm: '2rem', md: '3rem', lg: '4rem'}}}>
                    I'm an aspiring Web Developer <br></br> and a CHANGING TEXT.
                </Typography>
            </IntroText>
        </IntroBackground>
    )
}

export default Intro;

