import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Team from './Components/Team'
import Faq from './Components/Faq'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <>
       <Toaster position='bottom-right' />
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
