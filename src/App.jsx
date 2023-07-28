import Navbar from './components/Navbar'
import Intro from './components/Intro';
import About from './components/About';
import Divider from './components/Divider';
import Skills from './components/Skills';
import WorkHome from './components/WorkHome';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';

import './App.css'




function App() {
  return(
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Divider />
      <WorkHome />
      <Contact />


      <Routes>
        <Route path="/"></Route>
        <Route path="/about"></Route>
        <Route path="/skills"></Route>
        <Route path="/projects"></Route>
        <Route path="/contact"></Route>
      </Routes>
    
    </>

  )

}

export default App
