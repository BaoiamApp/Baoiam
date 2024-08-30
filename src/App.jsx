import React, { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Pages/GSCB'
import Home from './Pages/Home'
import School from './Pages/School'
import SkillCatalog from './Components/School/SkillCatalog'
import CoursePage from './Components/School/CoursePage'
import SignUp from './Pages/SignUp'
import Course from './Components/courses/course'

import College from './Components/College/College'
const App = () => {
  const [dark, setDark] = useState(false);

  const theme = () => {
    setDark(true);
    document.body.classList.toggle("dark");
  }

  return (
    <>
      <Navbar theme={theme} />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/gscp" element={<GSCB />} />
        {/* <Route path="/course:id" element={<CoursePage />} /> */}
        <Route path="/courses/school" element={<School />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses/college/:courseName" element={<College />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
