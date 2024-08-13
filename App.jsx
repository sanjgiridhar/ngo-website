import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsSection from './components/Projects'
import GetInvolved from './components/GetInvolved'
import Events from './components/Events'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
       <Navbar />
       <Hero />
       <div className='container'>
            <About />
            <ProjectsSection />
            
           
       </div>
       <GetInvolved />
       <Events />
      <Blogs />
      <Contact />
      
       <Footer />
       
    </>
   
    
  )
}

export default App