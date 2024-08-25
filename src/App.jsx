import React from 'react'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Components/GSCB/GSCB'
import Home from './Components/Home/Home'
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/gscb" element={<GSCB />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
