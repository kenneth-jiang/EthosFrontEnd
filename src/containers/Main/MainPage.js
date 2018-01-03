import React from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Grid, Segment, Menu, Icon, Image } from 'semantic-ui-react';

import { getCurrentUser } from '../../actions/userActions';
import requireAuthentication from '../../hoc/requireAuthentication';
import NavBar from '../NavBar/NavBar';
import Chat from '../Chat/Chat';

import UserPage from '../User/UserPage';
import WolframPage from '../Wolfram/WolframPage';
// import WolframSearch from '../Wolfram/WolframSearch';
// import WolframResults from '../Wolfram/WolframResults';
import YoutubePage from '../Youtube/YoutubePage';
import NewsPage from '../News/NewsPage';
import RedditPage from '../Reddit/RedditPage';
import RedditAuthorization from '../Reddit/RedditAuthorization';
import SpotifyPage from '../Spotify/SpotifyPage';
import SpotifyAuthorization from '../Spotify/SpotifyAuthorization';
import NotFound from '../../components/NotFound';


class MainPage extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getCurrentUser();
    } else {
      this.props.history.push('/login');
    }
  }


  render() {
    return (
      <div className="fulldisplay">
        <NavBar props={this.props} />
        <div className="fulldisplay">
          <Sidebar.Pushable as={Segment} className="fulldisplay">
            <Sidebar className="fulldisplay" as={Menu} animation="scale down" width='thin' style={{border:"solid"}} visible={this.props.sidebar.toggleVisibility} icon='labeled' vertical inverted>
              <Menu.Item name='home'>
                <Icon name='home' />
                <Link to="/">
                  Main
                </Link>
              </Menu.Item>
              <Menu.Item name='chat'>
                <Icon name='comments' />
                <Link to="/chat">
                  Chat
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Icon name="search" />
                <Link to="/wolfram">
                  Wolfram
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Icon name='newspaper' />
                <Link to="/news">
                  News
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Icon name='youtube square' />
                <Link to="/youtube">
                  Youtube
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
            <Sidebar.Pusher className="fulldisplay">
              <Segment className="fulldisplay">
                <Switch>
                  <Route path="/user" component={UserPage} />
                  <Route exact path="/chat" component={Chat} />
                  <Route exact path="/wolfram" component={WolframPage} />
                  <Route path="/news" component={NewsPage} />
                  <Route path="/youtube" component={YoutubePage} />
                  <Route path="/reddit" component={RedditPage} />
                  <Route path="/spotify" component={SpotifyPage} />
                  <Route exact path="/reddit_authorization" component={RedditAuthorization} />
                  <Route exact path="/spotify_authorization" component={SpotifyAuthorization} />
                  <Route exact path="/" render={() => "hello"} />
                  <Route component={NotFound} />
                </Switch>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
          {this.props.sidebar.toggleVisibility
            ?
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
    authentication: state.authentication,
    sidebar: state.sidebar,
    reddit: state.reddit,
    spotify: state.spotify,
  }
}

export default requireAuthentication(withRouter(connect(mapStateToProps, { getCurrentUser })(MainPage)));
