import React from 'react';
import listingsData from './../data/listingsData';
import Header from './Header';
import Footer from './Footer';

function SingleView({ match }) {
  let listing;
  // find correct listing (based on id in url)
  for (var i = 0; i < listingsData.length; i++) {
    if (listingsData[i].id === Number(match.params.id)) {
      listing = listingsData[i];
      break;
    }
  }
  const view = (
    <div className="browse-container">
      <div className="house-view">
        <img src={listing.image} alt="house" />
        <div className="price">${listing.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
        <div className="address">{listing.address}, {listing.city}, {listing.state}</div>
        <div className="home-type">{listing.homeType}</div>
        <div className="extra-info">
          <i className="fas fa-bed"></i> {listing.rooms}, <i className="far fa-square"></i> {listing.floorSpace}ft<sup>2</sup> 
        </div>
        <div className="extras">Extras:
          {listing.extras.map(extra => (
              <div key={extra}>-{extra}</div>
          ))}
        </div>
        <div className="buy-button">Buy</div>
      </div>
    </div>
  );

  return(
    <div>
      <Header />
      {view}
      <Footer />
    </div>
  );
}

export default SingleView;