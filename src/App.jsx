import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
    </div>
  )
}

export default App
