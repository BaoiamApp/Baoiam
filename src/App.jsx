import React, { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Pages/GSCB'
import Home from './Pages/Home'
import School from './Pages/School'
import ContactUs from './Components/Contact/ContactUs';
import SkillCatalog from './Components/School/SkillCatalog'
import CoursePage from './Components/School/CoursePage'
import SignUp from './Pages/SignUp'
import College from './Components/College/College'
import SchoolCourse from './Components/School/SchoolCourse'
import Blogs from './Pages/Blogs'
import AboutUs from './Pages/AboutUs'
import  TermsConditions from "./pages/TermsConditions"
import  PrivacyPolicy from "./pages/PrivacyPolicy"



const App = () => {
  const [dark, setDark] = useState(false);

  const theme = () => {
    setDark(true);
    document.body.classList.toggle("dark");
  }

  return (
    <div className='dark:bg-black dark:text-white '>
      <Navbar theme={theme} />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/gscp" element={<GSCB />} />
        {/* <Route path="/course:id" element={<CoursePage />} /> */}
        <Route path="/courses/school" element={<School />} />
        {/* School Course */}
        <Route path="/course/:id" element={<SchoolCourse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses/college/:courseName" element={<College />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
