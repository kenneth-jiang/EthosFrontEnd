import React from 'react';
import { withRouter, Switch, Route } from 'react-router';

import SignUp from '../containers/Authorization/SignUp';
import Login from '../containers/Authorization/Login';
import MainPage from '../containers/Main/MainPage';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route path='/' component={MainPage} />
      </Switch>
    )
  }
}

export default withRouter(App);
