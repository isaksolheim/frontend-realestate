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
      <div>
        {featuredListings.map(listing => (
          <Link to={`/browse/${listing.id}`} key={listing.id}>
            <div className="house-view">
              <img src={listing.image} alt="house" />
              <div className="featured-label">featured</div>
              <div className="home-type">{listing.homeType}</div>
              <div className="address">{listing.address}, {listing.city}, {listing.state}</div>
              <div className="extra-info">
                Rooms: {listing.rooms}, {listing.floorSpace} Sq Ft
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