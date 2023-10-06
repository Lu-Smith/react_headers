import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/HeaderOne.css';

const HeaderOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='HeaderOne'>
      <div className='title'><Link to='/'>Logo</Link></div>
      <div className="menu">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Contact</span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default HeaderOne