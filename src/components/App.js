import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import NavBar from '../containers/NavBar';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Main from '../containers/Main';
import Profile from '../containers/Profile';
import Search from '../containers/Search';
import Results from '../containers/Results';


class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.length === 0) {
      props.history.push('/login');
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}


export default withRouter(App);

// <Route exact path="/users/:id/pictures/56" component={UserShow} />
//
// const UserShow = function(params){
//   debugger
// }
