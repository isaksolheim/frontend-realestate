import React from 'react';
import './../styles/browse.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function Browse(props) {
  const listingView = (
    <div className="container">
      {props.data.map(listing => (
        <Link to={`/browse/${listing.id}`} key={listing.id}>
          <div className="house-view">
            <img src={listing.image} alt="house" />
            <h3>{listing.homeType}</h3>
            <p>{listing.address}, {listing.city}, {listing.state}</p>
            <div className="extra-info">
              Rooms: {listing.rooms}, {listing.floorSpace} Sq Ft
            </div>
            <div className="buy-button">Buy</div>
          </div>
        </Link>
      ))}
    </div>
  );

  return(
    <div>
      <Header />
      <h1>Browse</h1>
        <div className="filter">
          <select>
            <option>apartment</option>
            <option>loft</option>
          </select>
        </div>
        {listingView}
      <Footer />
    </div>
  );
}

export default Browse;