import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedHomes(props) {
  function featuredListings () {
    var featuredListings = [];
    for (var i = 0; i < props.data.length; i++) {
      if (props.data[i].featured) {
        featuredListings.push(props.data[i]);
      }
    }

    const featuredView = (
      <div className="browse-container">
        {featuredListings.map(listing => (
          <Link to={`/browse/${listing.id}`} key={listing.id}>
            <div className="house-view">
              <img src={listing.image} alt="house" />
              <div className="price">${listing.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
              <div className="address">{listing.address}, {listing.city}, {listing.state}</div>
              <div className="home-type">{listing.homeType}</div>
              <div className="extra-info">
                <i className="fas fa-bed"></i> {listing.rooms}, <i className="far fa-square"></i> {listing.floorSpace}ft<sup>2</sup> 
              </div>
              <div className="buy-button">Buy</div>
            </div>
          </Link>
        ))}
      </div>
    );

    return featuredView;
  }

  return featuredListings();
}

export default FeaturedHomes;