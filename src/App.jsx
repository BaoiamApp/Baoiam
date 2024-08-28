import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Components/GSCB/GSCB'
import Home from './Components/Home/Home'
import College from './Components/College/College'
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/gscb" element={<GSCB />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses/college/:courseName" element={<College />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
