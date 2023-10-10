import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/HeaderFour.css';
import ReactSwitch from 'react-switch';

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
};

const HeaderFour = ({toggleTheme, theme}: ThemeProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

 return (
    <nav className='HeaderFour'>
      <div className='TopHeader'>
      <span className="material-symbols-outlined logo">
        crowdsource
      </span>
      <div className='switch'>
        <label>{theme === 'light' ? 
            <span className="material-symbols-outlined sun">
            light_mode
            </span> : 
            <span className="material-symbols-outlined">
            dark_mode
            </span>
        }</label>
        <ReactSwitch checked={theme === "dark"} onChange={toggleTheme}/>
      </div>
      <div className='emptyLogo'>
      </div>
      </div>
      
      <div className='MainHeader'>
        <div className='title'><Link to='/'>Epic</Link></div>
        <div className={!menuOpen ? "menu" : ""} onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={!menuOpen ? "menuXHidden" : "menuX"} onClick={() => {
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
      </div> 
    </nav>
  )
}

export default HeaderFour