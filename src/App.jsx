import React, { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Components/GSCB/GSCB'
import Home from './Components/Home/Home'
import School from './Components/School/School'
import ContactUs from './Components/Contact/ContactUs';
import SkillCatalog from './Components/School/SkillCatalog'
import CoursePage from './Components/School/CoursePage'

const App = () => {
  const [dark,setDark] = useState(false);

  const theme = ()=>{
    setDark(true);
    document.body.classList.toggle("dark");}


 
     
  return (
    <>
       <Navbar theme={theme} />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/gscb" element={<GSCB />} />
        <Route path="/course" element={<School />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      
    <Footer/>
    </>
  )
}

export default App
