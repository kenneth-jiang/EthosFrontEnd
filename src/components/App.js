import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Main from '../containers/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
