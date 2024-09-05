import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Home/Navbar";
import { Route, Routes } from "react-router-dom";
import GSCB from "./Pages/GSCB";
import Home from "./Pages/Home";
import School from "./Pages/School";
import PAP from "./Pages/PAP";
import Checkout from "./Pages/Checkout";
import ContactUs from './Components/Contact/ContactUs';
import SkillCatalog from './Components/School/SkillCatalog'
import CoursePage from './Components/School/CoursePage'
import SignUp from './Pages/SignUp'
import College from './Pages/College'
import Login from './Pages/Login'
import AboutUs from './Pages/AboutUs'
import TermsConditions from "./Pages/TermsConditions"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import SchoolCourse from './Pages/SchoolCourse'
import Blogs from './Pages/Blogs'
import Career from './Components/Career/Career'
import Blog_detail from './Pages/Blog_detail'
import AnimatedForm from "./Pages/AnimatedForm";
import AnimatedLogin from "./Pages/AnimatedLogin";
import AnimatedSignup from "./Pages/AnimatedSignup";

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
        <Route path="/course/:course" element={<College />} />
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<AnimatedForm />} />
        {/* <Route path="/" element={<AnimatedLogin />} /> */}
        {/* <Route path="/" element={<AnimatedSignup />} /> */}
        <Route path="/gscp" element={<GSCB />} />
        <Route path="/pap" element={<PAP />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/courses/school" element={<School />} />
        <Route path="/course/:id" element={<SchoolCourse />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<AnimatedSignup />} />
        <Route path="/login" element={<AnimatedLogin />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Blog_detail" element={<Blog_detail />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
