import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Works from './components/Works'
import Portfolio from './components/Portfolio'
import People from './components/People'
import Footer from './components/Footer'
function App() {
  return (
    <div className=' bg-primary '>
    <Navbar/>
    <Hero/>
    <Expertise/>
    <Works/>
    <Portfolio/>
    <People/>
    <Footer/>
    </div>
  )
}

export default App