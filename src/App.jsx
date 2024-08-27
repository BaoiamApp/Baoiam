import React, { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Components/GSCB/GSCB'
import Home from './Components/Home/Home'
const App = () => {
  const [dark,setDark] = useState(false);

  const theme = ()=>{
    setDark(true);
    document.body.classList.toggle("dark");}


 
     
  return (
    <>
       <Navbar theme={theme} />

      <Routes>
        <Route path="/gscb" element={<GSCB />} />
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
