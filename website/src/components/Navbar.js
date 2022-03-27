import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul className='Nav'>
          <li className='NavItem'><Link to="/">Home</Link></li>
          <li className='NavItem'><Link to="/work">Work</Link></li>
          <li className='NavItem'><Link to="/about">About</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;