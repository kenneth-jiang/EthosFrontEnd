import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../containers/NavBar';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import Profile from '../containers/Profile';
import Search from '../containers/Search';
import Results from '../containers/Results';
import UserShow from '../containers/UserShow';
import AllUsers from '../containers/AllUsers';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../actions/authentication_actions';
import { getAllUsers } from '../actions/users_actions';
import { fetchPersonality } from '../actions/personality_actions';
import { Link } from 'react-router-dom';

import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

class EthosContainer extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('token')) {
      props.fetchPersonality();
      props.getAllUsers();
    } else {
      props.history.push('login');
    }
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <NavBar />
          <div style={{height: "100%"}}>
            <Sidebar.Pushable as={Segment} style={{height: "100%"}}>
              <Sidebar as={Menu} animation="slide along" width='thin' visible={this.props.sidebar.toggleVisibility} icon='labeled' vertical inverted>
                <Menu.Item name='home'>
                  <Icon name='home' />
                  <Link to="/">
                    Main
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='gamepad' />
                  <Link to="/results">
                    Results
                  </Link>
                </Menu.Item>
                <Menu.Item name='camera'>
                  <Icon name='camera' />
                  Channels
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher style={{height: "100%"}}>
                <Segment style={{height: "100%"}}>
                  <Switch>
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/users/index" component={AllUsers} />
                    <Route exact path="/users/:id/" component={UserShow} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/results" component={Results} />
                  </Switch>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication,
    sidebar: state.sidebar,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentUser: getCurrentUser,
    fetchPersonality: fetchPersonality,
    getAllUsers: getAllUsers,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EthosContainer));
//
// <div style={{position:"absolute", bottom:"0"}}>
//   <iframe src="https://open.spotify.com/embed?uri=spotify:track:7x8dCjCr0x6x2lXKujYD34" width="250" height="80" frameBorder="0" allowtransparency="true"></iframe>
// </div>
