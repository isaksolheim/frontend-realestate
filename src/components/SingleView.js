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
    <div className="singleview">
      <img src={listing.image} alt="house" />
      <div className="infobox">
        <ul>
          <li>Type: {listing.homeType}</li>
          <li>Address: {listing.address}</li>
          <li>City: {listing.city}</li>
          <li>Rooms: {listing.rooms}</li>
          <li>Floor Space: {listing.floorSpace}</li>
          <li>Price: {listing.price}USD</li>
          <li>
            Extras: {listing.extras.map(extra => (
              <div key={extra}>{extra}</div>
            ))}
          </li>
        </ul>
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