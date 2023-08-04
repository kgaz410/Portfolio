import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab, Box } from '@mui/material';
import { useState, useEffect } from 'react';

function ScrollTopButton() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

return (

    <>
         {backToTop && (
            <Box sx={{ '& > :not(style)': { m: 1 }, position: 'static', marginLeft: '30rem' }}>
                <Fab variant='extended' onClick={scrollUp} >
                    <NavigationIcon sx={{ mr: 1 }}/>
                </Fab>
            </Box>

        )}
    
    
    </>
   
   

);
}

export default ScrollTopButton;
