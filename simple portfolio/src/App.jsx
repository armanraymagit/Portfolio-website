import React from 'react'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'
import Education from './sections/Education.jsx'
import Certifications from './sections/Certifications.jsx'
import Cv from './sections/Cv.jsx'
import About from './sections/About.jsx'
const App = () => {
  return (
    <>
      <Hero />
      <Navbar/>
      <Projects/>
      <Education/>
      <Skills/>
      <Certifications/>
      <Cv/>
      <About/>  
      <Contact/>
    </>
    )
}

export default App