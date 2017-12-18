import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import NavBar from '../containers/NavBar';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Main from '../containers/Main';

class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.length === 0) {
      props.history.push('/login');
    } else {
      props.history.push('/');
    }
  }

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

export default withRouter(App);
