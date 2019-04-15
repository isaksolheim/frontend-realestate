import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/header.scss';

function Header() {
  return(
    <nav>
      <Link to='/' id="logo">Realty North</Link>
      <Link to='/browse/'>Browse</Link>
    </nav>
  );
}

export default Header;