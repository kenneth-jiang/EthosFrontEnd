import React from 'react';
import { withRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';

import { getCurrentUser } from '../../actions/userActions';
import requireAuthentication from '../../hoc/requireAuthentication';
import NavBar from '../NavBar/NavBar';
import Chat from '../Chat/Chat';
import WolframPage from '../Wolfram/WolframPage';
import NewsPage from '../News/NewsPage';
import YoutubePage from '../Youtube/YoutubePage';
import UserPage from '../User/UserPage';
import RedditPage from '../Reddit/RedditPage';
import RedditAuthorization from '../Reddit/RedditAuthorization';
import SpotifyPage from '../Spotify/SpotifyPage';
import SpotifyAuthorization from '../Spotify/SpotifyAuthorization';
import NotFound from '../../components/NotFound';
import Tones from '../Tones/Tones';


class MainPage extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getCurrentUser();
    } else {
      this.props.history.push('/login');
    }
  }

  renderMainPage = () => {
    return (
      <Segment className="fulldisplay" style={{background: "url(https://blogs.mulesoft.com/wp-content/uploads/2012/03/hello-world.jpg)", backgroundSize: "100%"}}>
      </Segment>
    )
  }

  render() {
    return (
      <div className="fulldisplay">
        <NavBar props={this.props} />
        <div className="fulldisplay">
          <Sidebar.Pushable as={Segment} className="fulldisplay">
            <Sidebar className="fulldisplay" as={Menu} animation="scale down" width='thin' style={{border:"solid"}} visible={this.props.sidebar.toggleVisibility} icon='labeled' vertical inverted>
              <Menu.Item name='home'>
                <Link to="/">
                  <Icon name='home' size="big" />
                  <br />
                  Main
                </Link>
              </Menu.Item>
              <Menu.Item name='chat'>
                <Link to="/chat">
                  <Icon name='comments' size="big" />
                  <br />
                  Chat
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/wolfram">
                  <Icon name="search" size="big" />
                  <br />
                  Wolfram
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/news">
                  <Icon name='newspaper' size="big" />
                  <br />
                  News
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/youtube">
                  <Icon name='youtube square' size="big" />
                  <br />
                  Youtube
                </Link>
              </Menu.Item>
              {this.props.reddit.isLoggedIn ?
                <Menu.Item>
                  <Link to="/reddit">
                    <Icon name='reddit' size="big" />
                    <br />
                    Reddit
                  </Link>
                </Menu.Item>
                :
                <Menu.Item>
                  <a href="https://ethos-back-end.herokuapp.com/api/v1/reddit_login">
                    <Icon name='reddit' size="big" />
                    <br />
                    Log In To Reddit
                  </a>
                </Menu.Item>
              }
              {this.props.spotify.isLoggedIn ?
                <Menu.Item>
                  <Link to="/spotify">
                    <Icon name='spotify' size="big" />
                    <br />
                    Spotify
                  </Link>
                </Menu.Item>
                :
                <Menu.Item>
                  <a href="https://ethos-back-end.herokuapp.com/api/v1/spotify_login">
                    <Icon name='spotify' size="big" />
                    <br />
                    Log In To Spotify
                  </a>
                </Menu.Item>
              }
            </Sidebar>
            <Sidebar.Pusher className="fulldisplay">
              <Segment className="fulldisplay">
                <Switch>
                  <Route exact path="/chat" component={Chat} />
                  <Route exact path="/wolfram" component={WolframPage} />
                  <Route exact path="/youtube" component={YoutubePage} />
                  <Route exact path="/reddit_authorization" component={RedditAuthorization} />
                  <Route exact path="/spotify_authorization" component={SpotifyAuthorization} />
                  <Route path="/user" component={UserPage} />
                  <Route path="/news" component={NewsPage} />
                  <Route path="/reddit" component={RedditPage} />
                  <Route path="/spotify" component={SpotifyPage} />
                  <Route exact path="/" render={() => <Redirect to={`/user/${this.props.user.currentUser.user.id}`} />} />
                  <Route exact path="/tones" component={Tones} />
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
    user: state.user,
    sidebar: state.sidebar,
    reddit: state.reddit,
    spotify: state.spotify,
  }
}

export default requireAuthentication(withRouter(connect(mapStateToProps, { getCurrentUser })(MainPage)));
