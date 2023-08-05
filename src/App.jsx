import Intro from './components/Intro';
import About from './components/About';
import Divider from './components/Divider';
import Skills from './components/Skills';
import WorkHome from './components/WorkHome';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import { Box, Stack } from '@mui/material';
import DividerAbout from './components/DividerAbout';
import NavBar from './components/Navbar';



function App() {



  return(
  <Box>
     
     <Stack >
        <NavBar/>
        <Intro />
        <DividerAbout />
        <About />
        <Skills/>
        <Divider />
        <WorkHome />
        <Contact />
        <BottomNav />
             
      </Stack>






      <Routes>
        <Route path="/" ></Route>
        <Route path="/about" ></Route>
        <Route path="/skills" ></Route>
        <Route path="/projects" ></Route>
        <Route path="/contact" ></Route>
      </Routes>
    
    </Box>

  )

}

export default App
