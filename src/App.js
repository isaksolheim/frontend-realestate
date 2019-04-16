import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Browse from './components/Browse';
import listingsData from './data/listingsData';
import SingleView from './components/SingleView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: listingsData,
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/browse/" exact render={(props) => (
            <Browse {...props} data={this.state.data} />
          )}/>
          <Route path="/browse/:id" render={(props) => (
            <SingleView {...props} data={this.state.data} />
          )} /> 
        </div>
      </Router>
    );
  }
}

export default App;
