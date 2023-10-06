import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/HeaderTwo.css';
import ReactSwitch from 'react-switch';

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
};

const HeaderTwo = ({toggleTheme, theme}: ThemeProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='HeaderTwo'>
      <div className='title'><Link to='/'>Standard</Link></div>
      <div className='switch'>
          <ReactSwitch checked={theme === "dark"} onChange={toggleTheme}/>
      </div>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
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

export default HeaderTwo