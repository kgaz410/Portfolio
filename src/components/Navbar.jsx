import * as React from 'react';
import './intro.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as Scroll} from 'react-scroll';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { HashLink } from 'react-router-hash-link'



const Navbar = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: '#241C2F',
    opacity: '98%'
})

const LinkStyle = styled(Typography) ({
    color: 'rgb(224, 222, 222)',
    textDecoration: 'none',
    fontFamily: 'Poppins', 
    cursor: 'pointer',
    '&:hover' : {
        borderBottom: 'solid',
        borderBottomWidth: '0.15rem',
        borderBottomColor: 'rgb(224, 222, 222)',
    }

})


const resumeURL = "http://localhost:5173/Portfolio-Resume.pdf"



function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    // DOWNLOAD RESUME FUNCTION
    const downloadClick = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

  return (
            <Navbar>
                <Toolbar sx={{width: '60%', display: 'flex', justifyContent: 'space-between'}}>

                {/* DROPDOWN MENU */}
                <Button sx={{display: {xs: 'block', sm: 'none'}}}
                   id="demo-positioned-button"
                   aria-controls={open ? 'demo-positioned-button' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick}>
                    <MenuIcon sx={{color: 'rgb(224, 222, 222)', display: {xs: 'block', sm: 'none'}}}></MenuIcon>
                </Button>


        
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}>
                        
                    <MenuItem component={HashLink} to='#home' onClick={handleClose}>Home</MenuItem>
                    <MenuItem component={HashLink} to='#about' onClick={handleClose}>About</MenuItem>
                    <MenuItem component={HashLink} to='#skills' onClick={handleClose}>Skills</MenuItem>
                    <MenuItem component={HashLink} to='#projects' onClick={handleClose}>Projects</MenuItem>
                    <MenuItem component={HashLink} to='#contact' onClick={handleClose}>Contact Me</MenuItem>
                    <MenuItem component={Link} onClick={() => {downloadClick(resumeURL)}}>Resume</MenuItem>
                </Menu>



                    <LinkStyle className='menu-link' to='home' smooth='true' duration={500} spy={true} exact='true' offset={-100} activeClass='active'
                        component={Scroll}  sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Home
                    </LinkStyle>

                    <LinkStyle to='about' smooth='true' duration={500} spy={true} exact='true' offset={100} activeClass='active'
                        component={Scroll}  sx={{ display: {xs: 'none', sm: 'block'}}}>
                        About
                    </LinkStyle>

                    <LinkStyle to='skills' smooth='true' duration={500} spy={true} exact='true' offset={100} activeClass='active'
                        component={Scroll} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Skills
                    </LinkStyle>

                    <LinkStyle to='projects' smooth='true' duration={500} spy={true} exact='true' offset={100} activeClass='active'
                        component={Scroll} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Projects
                    </LinkStyle>

                    <LinkStyle to='contact' smooth='true' duration={500} spy={true} exact='true' offset={100} activeClass='active'
                        component={Scroll} sx={{ display: {xs: 'none', sm: 'block'}}}>
                        Contact Me
                    </LinkStyle>
                </Toolbar>
                    <Button onClick={() => {downloadClick(resumeURL)}} sx={{ display: {xs: 'none', sm: 'block'}, width: '7rem' }}>
                        <FontAwesomeIcon icon={faFileArrowDown} style={{color: "#ffffff", height: 30}}/>
                        <div id='text-overlay'>
                            My Resume
                        </div>                
                    </Button>
          
            </Navbar>


       

  );
}

export default NavBar;
