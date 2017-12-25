import React from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import SignUp from '../Authorization/SignUp';
import Login from '../Authorization/Login';
import UserShow from '../User/UserShow';
import UsersIndex from '../User/UsersIndex';
import WolframSearch from '../Wolfram/WolframSearch';
import WolframResults from '../Wolfram/WolframResults';

import { getCurrentUser } from '../../actions/userActions';
import { getAllUsers } from '../../actions/userActions';
import { getUserPersonality } from '../../actions/personalityActions';

import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('token')) {
      props.getCurrentUser();
      // props.getUserPersonality();
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
                  <Link to="/wolfram_search">
                    Wolfram Search
                  </Link>
                </Menu.Item>
                <Menu.Item name='camera'>
                  <Icon name='camera' />
                  <Link to="/wolfram_results">
                    Wolfram Results
                  </Link>
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher style={{height: "100%"}}>
                <Segment style={{height: "100%"}}>
                  <Switch>
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/users/all" component={UsersIndex} />
                    <Route exact path="/user/:id/" component={UserShow} />
                    <Route exact path="/wolfram_search" component={WolframSearch} />
                    <Route exact path="/wolfram_results" component={WolframResults} />
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
    sidebar: state.sidebar,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentUser,
    getUserPersonality,
    getAllUsers,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// <div style={{position:"absolute", bottom:"0"}}>
//   <iframe src="https://open.spotify.com/embed?uri=spotify:track:7x8dCjCr0x6x2lXKujYD34" width="250" height="80" frameBorder="0" allowtransparency="true"></iframe>
// </div>
