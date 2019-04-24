import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomeFilter from './HomeFilter';


class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeTypes: [],
      states: [],
      extras: [],
      sortBy: 0,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
  }

  sortHandler = (event) => {
    // value: 0: no sort, 1: low to high, 2: high to low,
    this.setState({ sortBy: Number(event.target.value) });
  }

  changeHandler = (event) => {
    if (event.target.id === 'homeType') {
      // hometype change
      var homeTypes = this.state.homeTypes;
      if (event.target.checked) {
        // sets hometype if checked
        homeTypes.push(event.target.getAttribute('hometype'));
      } else {
        for (var i = homeTypes.length - 1; i >= 0; i--) {
          if (homeTypes[i] === event.target.getAttribute('hometype')) {
            homeTypes.splice(i, 1);
          }
        }
      }
      this.setState({ homeTypes: homeTypes });
    } else if (event.target.id === 'state') {
      // state change
      var states = this.state.states;
      if (event.target.checked) {
        // sets state if checked
        states.push(event.target.getAttribute('state'));
      } else {
        for (var j = states.length - 1; j >= 0; j--) {
          if (states[j] === event.target.getAttribute('state')) {
            states.splice(j, 1);
          }
        }
      }
      this.setState({ states: states });
    } else if (event.target.getAttribute('extra') === 'extra') {
      // extra change
      var extras = this.state.extras;

      if (event.target.checked === true || event.target.checked === false) {
        if (event.target.checked) {
          extras.push(event.target.id);
        } else {
          for (var k = extras.length - 1; k >= 0; k--) {
            if (extras[k] === event.target.id) {
              extras.splice(k, 1);
            }
          }
        }
        this.setState({ extras: extras });
      }
    }
  }

  listingView () {
    var listings = [];

    function bubbleSort(data, direction) {
      /* 
        uses a bubblesorting algorithm to sort
        the data given based on price
      */
      while (true) {
        var changes = 0;
        var finished = false;
        if (direction === 1) {
          for (var i = 0; i < data.length - 1; i++) {
            if (data[i].price > data[i+1].price) {
              // swaps places
              var tmp = data[i];
              data[i] = data[i+1];
              data[i+1] = tmp;
              changes++;
            }
            if (i === data.length - 2 && changes === 0) {
              finished = true;
            }
          }
          if (finished) {
            break;
          }
        } else {
          for (i = data.length - 1; i >= 1; i--) {
            if (data[i].price > data[i-1].price) {
              // swaps places
              tmp = data[i];
              data[i] = data[i-1];
              data[i-1] = tmp;
              changes++;
            }
            if (i === 1 && changes === 0) {
              finished = true;
            }
          }
          if (finished) {
            break;
          }
        }
      }
      return data;
    }

    function includesExtras(stateExtras, extras) {
      // returns true if extras include all extras in stateExtras
      return (stateExtras.every(i => extras.includes(i)));
    }

    function includesThis(stateHomeTypes, homeType) {
      for (var i = 0; i < stateHomeTypes.length; i++) {
        if (stateHomeTypes[i] === homeType) {
          return true;
        }
      }
      return false;
    }

    // find what need to be sorted by:
    for (var i = 0; i < this.props.data.length; i++) {
      if (includesThis(this.state.homeTypes, this.props.data[i].homeType) || this.state.homeTypes.length === 0) {
        if (includesThis(this.state.states, this.props.data[i].state) || this.state.states.length === 0) {
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

    if (this.state.sortBy !== 0) {
      listings = bubbleSort(listings, this.state.sortBy);
    }


    const view = (
      <div className="browse-container">
        {listings.map(listing => (
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
        {listings.length === 0 ? <div className="no-results">No results</div> : undefined}
      </div>
    );
    return view; 
  }

  render() {
    return(
      <div>
        <Header />
          <HomeFilter changeHandler={this.changeHandler} sortHandler={this.sortHandler} />
          {this.listingView()}
        <Footer />
      </div>
    );
  }
}

export default Browse;
