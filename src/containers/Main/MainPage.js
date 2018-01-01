import React from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import requireAuthentication from '../../hoc/requireAuthentication';
import NavBar from '../NavBar/NavBar';
import UserPage from '../User/UserPage';
import WolframSearch from '../Wolfram/WolframSearch';
import WolframResults from '../Wolfram/WolframResults';
import YoutubePage from '../Youtube/YoutubePage';
import NewsPage from '../News/NewsPage';
import RedditPage from '../Reddit/RedditPage';
import RedditAuthorization from '../Reddit/RedditAuthorization';
import SpotifyPage from '../Spotify/SpotifyPage';
import SpotifyAuthorization from '../Spotify/SpotifyAuthorization';

import { getCurrentUser } from '../../actions/userActions';

import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('token')) {
      props.getCurrentUser();
    } else {
      props.history.push('/welcome');
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
                  <Icon name='search' />
                  <Link to="/wolfram_search">
                    Wolfram
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
                {this.props.reddit.isLoggedIn ?
                  <Menu.Item>
                    <Icon name='reddit' />
                    <Link to="/reddit">
                      Reddit
                    </Link>
                  </Menu.Item>
                  :
                  <Menu.Item>
                    <Icon name='reddit' />
                    <a href="http://localhost:3001/api/v1/reddit_login">
                      Log In To Reddit
                    </a>
                  </Menu.Item>
                }
                {this.props.spotify.isLoggedIn ?
                  <Menu.Item>
                    <Icon name='spotify' />
                    <Link to="/spotify">
                      Spotify
                    </Link>
                  </Menu.Item>
                  :
                  <Menu.Item>
                    <Icon name='spotify' />
                    <a href="http://localhost:3001/api/v1/spotify_login">
                      Log In To Spotify
                    </a>
                  </Menu.Item>
                }
              </Sidebar>
              <Sidebar.Pusher style={{height: "100%"}}>
                <Segment style={{height: "100%"}}>
                  <Switch>
                    <Route path="/user" component={UserPage} />
                    <Route exact path="/wolfram_search" component={WolframSearch} />
                    <Route exact path="/wolfram_results" component={WolframResults} />
                    <Route path="/youtube" component={YoutubePage} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/reddit" component={RedditPage} />
                    <Route path="/spotify" component={SpotifyPage} />
                    <Route exact path="/reddit_authorization" component={RedditAuthorization} />
                    <Route exact path="/spotify_authorization" component={SpotifyAuthorization} />
                  </Switch>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            {this.props.sidebar.toggleVisibility ?
              <div style={{position:"absolute", left:"25px", bottom:"25px"}}>
                <iframe src={`https://open.spotify.com/embed?uri=${this.props.spotify.uri}`} title="spotifyplayer" width="250" height="80" allowtransparency="true"></iframe>
              </div>
            :
              null
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    reddit: state.reddit,
    spotify: state.spotify,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentUser,
  }, dispatch)
}

export default requireAuthentication(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage))
);

// <div style={{position:"absolute", bottom:"0"}}>
//   <iframe src="https://open.spotify.com/embed?uri=spotify:track:1JDIArrcepzWDTAWXdGYmP" width="250" height="80" frameBorder="0" allowtransparency="true"></iframe>
// </div>
