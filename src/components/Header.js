import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <nav>
      <Link to='/' id="logo">Realty North</Link>
      <Link to='/browse/'>Browse</Link>
    </nav>
  );
}

export default Header;