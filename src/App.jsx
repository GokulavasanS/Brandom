// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Pages/Home/Home';
import Service from './Pages/Services/Service';
import About from './Pages/About/About';
// import Portfolio from './Pages/Portfolio/Portfolio'
import Contacts from './Pages/ContactUs/Contact';
import Footer from './Components/Footer/Footer'
import Preloader from './Preloader';

function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2010); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {loading ? <Preloader setLoading={setLoading} /> : (
    <Router>
      {/* <Preloader /> */}
      <Navbar />
      <div className="main">
        <Home />
        <Service />
        {/* <About /> */}
        {/* <Portfolio /> */}
        <Contacts /> 
      </div>
      <Footer />
    </Router>
    )}
    </div>
  );
}

export default App;
