import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FeaturedHomes from './FeaturedHomes';

function LandingPage(props) {
  return(
    <div>
      <Header />
      
      <div className="parallax">
        <div className="title">
          Realty North
          <div className="slogan">
            Buy Apartments, Lofts, Condos and Rooms
          </div>
        </div>
      </div>

      <div className="landingpage-container">
        <div className="card">
          <p>
            We're reimagining how you buy, sell and rent.
            It's now easier to get into a place you love.
            So let's do this, together.
          </p>
        </div>
        <FeaturedHomes data={props.data} />
        <Link to='/browse/'>
          <div className="card" id="buy">
            <div className="buyahome">Buy a Home</div>
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