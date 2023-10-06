import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/HeaderThree.css';
import ReactSwitch from 'react-switch';

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
};

const HeaderThree = ({toggleTheme, theme}: ThemeProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='HeaderThree'>
      <div className='title'><Link to='/'>Advanced</Link></div>
      <div className='switch'>
        <label htmlFor="">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch checked={theme === "dark"} onChange={toggleTheme}/>
      </div>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div className="menuX" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span className="material-symbols-outlined">
          close
        </span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to='/'>
          <span className="material-symbols-outlined">
            home
          </span>
        </NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
 
    </nav>
  )
}

export default HeaderThree