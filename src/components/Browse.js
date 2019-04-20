import React from 'react';
import './../styles/browse.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomeFilter from './HomeFilter';
import listingsData from './../data/listingsData';


class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeType: 'All',
      state: 'All',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (event) => {
    if (event.target.id === 'homeType') {
      this.setState({ homeType: event.target.value })
    } else if (event.target.id === 'state') {
      this.setState({ state: event.target.value })
    }
  }
  
  createListingView() {
    // sortedListings starts with all listings, then checks 
    // all filters and removes ones not matching
    const tmp = listingsData;
    var sortedListings = tmp; 
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
        {listingsData.map(listing => (
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

  listingView () {
    var listings = [];
    // find what need to be sorted by:
    for (var i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].homeType === this.state.homeType || this.state.homeType === 'All') {
        if (this.props.data[i].state === this.state.state || this.state.state === 'All') {
          listings.push(this.props.data[i]);
        }
      }
    }

    const view = (
      <div className="container">
        {listings.map(listing => (
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
    return view; 
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Browse houses</h1>
          <HomeFilter changeHandler={this.changeHandler} />
          {this.listingView()}
        <Footer />
      </div>
    );
  }
}

export default Browse;
