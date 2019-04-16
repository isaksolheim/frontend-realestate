import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './../styles/landingpage.scss';

function LandingPage() {
  return(
    <div>
      <Header />
      <br />
      <div className="container">
        <div id="slogan">
          <h1>Find your perfect home</h1>
          <h4>Search houses in all of Norway</h4>
          <div id="searchbar">
            <input type="text" />
            <button>Go</button>
          </div>
        </div>
        <div className="card" id="text">
          <p>
            We're reimagining how you buy, sell and rent.
            It's now weasier to get into a place you love.
            So let's do this, together.
          </p>
        </div>
        <hr />
        <Link to='/browse/'>
          <div className="card" id="buy">
            <h1>Buy a home</h1>
            <p>
              Find a place with an immersive photo experience
              and the most listings, including things you won't
              find anywhere else.
            </p>
            <div id="browse-button">Browse Houses</div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;