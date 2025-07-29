import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Faculties from './components/Faculties'
import Programs from './components/Programs'
import Admissions from './components/Admissions'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Faculties/>
      <Programs/>
      <Admissions/>
      <Contact/>
      <Routes>
        <Route path=''/>
      </Routes>
    </div>
  )
}

export default App