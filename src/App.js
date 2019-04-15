import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Browse from './components/Browse';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/browse/" component={Browse} />
        </div>
      </Router>
    );
  }
}

export default App;
