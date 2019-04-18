import React from 'react';
import './../styles/browse.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomeFilter from './HomeFilter';


class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeType: 'All',
      city: 'All',
    };
  }

  changeHandler = (event) => {
    this.setState({ homeType: event.target.value })
  }
  
  createListingView() {
    console.log(this.props.data);
    // sortedListings starts with all listings, then checks 
    // all filters and removes ones not matching
    var sortedListings = this.props.data;
    // loops through state and find ones not set to default
    for (var key in this.state) {
      if (this.state[key] !== 'All') {
        for (var i = sortedListings.length - 1; i >= 0; i--) {
          if (sortedListings[i][key] !== this.state[key]) {
            sortedListings.splice(i,1);
          }
        }
      }
    }

    var listingView = (
      <div className="container">
        {sortedListings.map(listing => (
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
    return listingView;
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Browse</h1>
          <HomeFilter changeHandler={this.changeHandler} />
          {this.createListingView()}
        <Footer />
      </div>
    );
  }
}

export default Browse;