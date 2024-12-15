import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |  {/* Changed '/home' to '/' */}
        <Link to="/about">About</Link> | 
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Changed '/home' to '/' */}
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
