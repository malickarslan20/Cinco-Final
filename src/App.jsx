import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Team from './Components/Team'
import Faq from './Components/Faq'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
      
        <Navbar/>
        <HeroSection/>
        <About/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Faq/>
        <Contactus/>
        <Footer/>
    
    </>
  )
}

export default App
