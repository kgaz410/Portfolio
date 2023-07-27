import Navbar from './components/Navbar'
import Intro from './components/Intro';
import About from './components/About';
import AboutDivider from './components/AboutDivider';
import Skills from './components/Skills';
import { Route, Routes } from 'react-router-dom';

import './App.css'




function App() {
  return(
    <>
      <Navbar/>
      <Intro/>
      <About/>
      {/* <AboutDivider/> */}
      <Skills/>
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
