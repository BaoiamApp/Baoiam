import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Home/Navbar";
import { Route, Routes } from "react-router-dom";
import GSCB from "./Components/GSCB/GSCB";
import PAP from "./Components/PAP_Page/PAP";
import Home from "./Components/Home/Home";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/gscb" element={<GSCB />} />
        <Route path="/pap" element={<PAP />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
