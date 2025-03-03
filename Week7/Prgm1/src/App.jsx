import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Admissions from './Admissions';
import Contact from './Contact';

const Navbar = () => (
  <nav style={{ backgroundColor: '#4F46E5', color: 'white', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Zenith Institute</h1>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About Us</Link>
        <Link to="/admissions" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Admissions</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </div>
  </nav>
);

const App = () => (
  <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </>
);

export default App;
