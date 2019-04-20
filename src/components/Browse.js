import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomeFilter from './HomeFilter';


class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeType: 'All',
      state: 'All',
      extras: [],
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (event) => {
    // handling for dropdown change
    if (event.target.id === 'homeType') {
      this.setState({ homeType: event.target.value })
    } else if (event.target.id === 'state') {
      this.setState({ state: event.target.value })
    }


    // handling for checkbox change
    var extras = this.state.extras;

    if (event.target.checked === true || event.target.checked === false) {
      if (event.target.checked) {
        extras.push(event.target.id);
      } else {
        for (var i = extras.length - 1; i >= 0; i--) {
          if (extras[i] === event.target.id) {
            extras.splice(i, 1);
          }
        }
      }
      this.setState({ extras: extras });
    }
  }

  listingView () {
    var listings = [];

    function includesExtras(stateExtras, extras) {
      // returns true if extras include all extras in stateExtras
      return (stateExtras.every(i => extras.includes(i)));
    }

    // find what need to be sorted by:
    for (var i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].homeType === this.state.homeType || this.state.homeType === 'All') {
        if (this.props.data[i].state === this.state.state || this.state.state === 'All') {
          if (this.state.extras.length !== 0) {
            // checks if all extras in state is included in prop extras
            if (includesExtras(this.state.extras, this.props.data[i].extras)) {
              listings.push(this.props.data[i]);
            }
          } else {
            listings.push(this.props.data[i]); 
          }
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
