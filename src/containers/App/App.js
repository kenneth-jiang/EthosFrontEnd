import React from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import SignUp from '../Authorization/SignUp';
import Login from '../Authorization/Login';
import UsersShow from '../User/UsersShow';
import UsersIndex from '../User/UsersIndex';
import WolframSearch from '../Wolfram/WolframSearch';
import WolframResults from '../Wolfram/WolframResults';
import YoutubePage from '../Youtube/YoutubePage';
import NewsPage from '../News/NewsPage';
import RedditPage from '../Reddit/RedditPage';

import { getCurrentUser } from '../../actions/userActions';

import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';


class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('token')) {
      props.getCurrentUser();
    } else {
      props.history.push('login');
    }
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <NavBar props={this.props} />
          <div style={{height: "100%"}}>
            <Sidebar.Pushable as={Segment} style={{height: "100%"}}>
              <Sidebar as={Menu} animation="scale down" width='thin' visible={this.props.sidebar.toggleVisibility} icon='labeled' vertical inverted>
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
                <Menu.Item>
                  <Icon name='youtube square' />
                  <Link to="/youtube">
                    Youtube
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='newspaper' />
                  <Link to="/news">
                    News
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='newspaper' />
                  <Link to="/news/sources">
                    News Sources
                  </Link>
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher style={{height: "100%"}}>
                <Segment style={{height: "100%"}}>
                  <Switch>
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/users/all" component={UsersIndex} />
                    <Route exact path="/users/:id/" component={UsersShow} />
                    <Route exact path="/wolfram_search" component={WolframSearch} />
                    <Route exact path="/wolfram_results" component={WolframResults} />
                    <Route path="/youtube" component={YoutubePage} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/reddit" component={RedditPage} />
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
    authentication: state.authentication,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentUser,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// <div style={{position:"absolute", bottom:"0"}}>
//   <iframe src="https://open.spotify.com/embed?uri=spotify:track:7x8dCjCr0x6x2lXKujYD34" width="250" height="80" frameBorder="0" allowtransparency="true"></iframe>
// </div>
