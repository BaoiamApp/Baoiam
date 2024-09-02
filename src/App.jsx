import React, { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import GSCB from './Pages/GSCB'
import Home from './Pages/Home'
import School from './Pages/School'
import ContactUs from './Components/Contact/ContactUs';
import Maintenance from './Components/Contact/Maintenance';
import ITIE from './Pages/ITIE'
import SkillCatalog from './Components/School/SkillCatalog'
import CoursePage from './Components/School/CoursePage'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

import AboutUs from './Pages/AboutUs'
import TermsConditions from "./Pages/TermsConditions"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import College from './Components/College/College'
import SchoolCourse from './Pages/SchoolCourse'
import Blogs from './Pages/Blogs'
import Career from './Components/Career/Career'
import Blog_detail from './Pages/Blog_detail'

const App = () => {
  const [dark, setDark] = useState(false);

  const theme = () => {
    setDark(true);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="dark:bg-black dark:text-white ">
      <Navbar theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gscp" element={<GSCB />} />
        {/* <Route path="/course:id" element={<CoursePage />} /> */}
        <Route path="/courses/school" element={<School />} />
        {/* School Course */}
        <Route path="/course/:id" element={<SchoolCourse />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/login" element={<Login />} />
    



        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

        <Route path="/courses/college/:courseName" element={<College />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Blog_detail" element={<Blog_detail />} />
        <Route path="/career" element={<Career />} />

        <Route path="/Maintenance" element={<Maintenance />} />
        <Route path="/ITIE" element={<ITIE />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
