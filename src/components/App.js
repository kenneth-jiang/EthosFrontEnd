import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import EthosContainer from "../containers/EthosContainer";

import * as actions from '../actions/authentication_actions';


class App extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('token')) {
      props.getCurrentUser();
    } else {
      props.history.push('/login');
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/' component={EthosContainer} />
      </Switch>
    );
  }
}

export default withRouter(connect(null, actions)(App));

// <Route exact path="/users/:id/pictures/56" component={UserShow} />
//
// const UserShow = function(params){
//   debugger
// }
