// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Pages/Home/Home';
import Service from './Pages/Services/Service';
// import About from './Pages/About';
// import Portfolio from './Pages/Portfolio';
// import Contacts from './Pages/Contacts';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Home />
        {/* <About /> */}
        <Service />
        {/* <Portfolio />
        <Contacts /> */}
      </div>
    </Router>
  );
}

export default App;
