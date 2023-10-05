import React from 'react';
import { Link } from 'react-router-dom';

const HeaderOne = () => {
  return (
    <nav className='HeaderOne'>
    <div>logo</div>
    <ul>
      <li><Link>Home</Link></li>
      <li><Link>About</Link></li>
      <li><Link>Shop</Link></li>
      <li><Link>Contact</Link></li>
    </ul>
  </nav>
  )
}

export default HeaderOne