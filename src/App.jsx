import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Components/GSCB/GSCB'
import Home from './Components/Home/Home'
import Hero from './Hero/Hero'
import School from './Components/School/School'
import SkillCatalog from './Components/School/SkillCatalog'
import CoursePage from './Components/School/CoursePage'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/gscb" element={<GSCB />} />
        <Route path="/:courseId" element={<CoursePage />} />
      </Routes>
      <School />
    <Footer/>
    </>
  )
}

export default App
