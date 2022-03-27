import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import NavBar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='Main'>
          <NavBar /> <br></br>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            </Routes>
            </div>
      </Router>
    );
  }
}
export default App;