// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Home Page</h1>
    <p className="text-lg text-gray-700">
      Welcome to the Home page.
    </p>
  </div>
);

export default App;
