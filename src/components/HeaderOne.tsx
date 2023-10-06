import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeaderOne.css';

const HeaderOne = () => {
  return (
    <nav className='HeaderOne'>
      <div className='title'><Link to='/'>Logo</Link></div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default HeaderOne