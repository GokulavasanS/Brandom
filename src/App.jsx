// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Pages/Home/Home';
import Service from './Pages/Services/Service';
import About from './Pages/About/About';
// import Portfolio from './Pages/Portfolio';
import Contacts from './Pages/ContactUs/Contact';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <Service />
        {/* <Portfolio /> */}
        <Contacts /> 
      </div>
      <Footer />
    </Router>
  );
}

export default App;
