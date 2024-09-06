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

import AboutUs from './Pages/AboutUs'
import TermsConditions from "./Pages/TermsConditions"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import SchoolCourse from './Pages/SchoolCourse'
import Blogs from './Pages/Blogs'
import Career from './Components/Career/Career'
import Blog_detail from './Pages/Blog_detail'
import Enterpunership from './Pages/Enterpunership'
import PAP from "./Pages/PAP";
import Checkout from "./Pages/Checkout";
import College from "./Pages/College";
import Login from "./Pages/Login";





import { OurTeam } from "./Pages/OurTeam";
import ProfilePage from './Components/profile/ProfilePage'
import SideBar from './Components/profile/SideBar'
import AnimatedForm from "./Pages/AnimatedForm";
import AnimatedLogin from "./Pages/AnimatedLogin";
import AnimatedSignup from "./Pages/AnimatedSignup";


const App = () => {
  const [dark, setDark] = useState(false);

  const theme = () => {
    setDark(true);
    document.body.classList.toggle("dark");
  };

  return (

    <div className='dark:bg-black w-full h-full dark:text-white '>

      <Navbar theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gcsp" element={<GSCB />} />
        <Route path="/courses/school" element={<School />} />
        {/* <Route path="/course/:id" element={<Course />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/courses/college' element={<College />} />
        <Route path='/course/:course' element={<div>colleg Sub Category</div>} />

        {/* <Route path="/course:id" element={<CoursePage />} /> */}
        <Route path='/pap' element={<PAP />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/courses/school' element={<School />} />
        {/* School Course */}

        <Route path="/course/school/:id" element={<SchoolCourse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="/Blog_detail/:id" element={<Blog_detail />} />
        <Route path='/career' element={<Career />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path="/profile" element={<SideBar />} />
        <Route path="/course/:course" element={<College />} />
        <Route path="/gscp" element={<GSCB />} />
        <Route path="/pap" element={<PAP />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/courses/school" element={<School />} />
        <Route path="/course/:id" element={<SchoolCourse />} />
        <Route path="/signup" element={<AnimatedSignup />} />
        <Route path="/login" element={<AnimatedLogin />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Blog_detail" element={<Blog_detail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/entrepreneurship" element={<Enterpunership />} />

        <Route path="/Maintenance" element={<Maintenance />} />
        <Route path="/ITIE" element={<ITIE />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

