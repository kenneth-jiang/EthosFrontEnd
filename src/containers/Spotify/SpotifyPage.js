import React from 'react';

import { connect } from 'react-redux';

import SpotifySearch from './SpotifySearch';
import SpotifyTracks from './SpotifyTracks';
import SpotifyArtists from './SpotifyArtists';

import { getSpotifySelf, getSpotifyUserTopTracks, getSpotifyUserTopArtists, getSpotifyUserRecentTracks, searchSpotifyTrack, searchSpotifyArtist } from '../../actions/spotifyActions';

import { Grid, Button, Card, Image } from 'semantic-ui-react';


class SpotifyPage extends React.Component {
  componentDidMount() {
    this.props.getSpotifySelf()
  }

  renderButtons = () => {
    const { getSpotifyUserTopTracks, getSpotifyUserTopArtists, getSpotifyUserRecentTracks } = this.props;
    return (
      <div>
        <Button onClick={getSpotifyUserTopTracks}>User Top Tracks</Button><br/>
        <Button onClick={getSpotifyUserTopArtists}>User Top Artists</Button><br/>
        <Button onClick={getSpotifyUserRecentTracks}>User Recent Tracks</Button>
      </div>
    )
  }

  renderSelf = () => {
    return (
        <Card>
          {this.props.spotify.currentUser.icon_img !== undefined ?
            <Image src={this.props.reddit.currentUser.icon_img || null} />
          :
            null
          }
          <Card.Content>
            <Card.Header>
              {this.props.spotify.currentUser.display_name || this.props.spotify.currentUser.id}
            </Card.Header>
          </Card.Content>
        </Card>
    )
  }

  render() {
    return (
      <div className="fulldisplay">
      <Grid style={{border:"solid"}} columns="equal">
        <Grid.Column align="center">
          <SpotifySearch />
        </Grid.Column>
        <Grid.Column align="center">
          <iframe src={`https://open.spotify.com/embed?uri=${this.props.spotify.uri}`} title="spotifyplayer" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
        </Grid.Column>
        <Grid.Column align="right">
          {this.renderSelf()}
          {this.renderButtons()}
        </Grid.Column>
      </Grid>
        <Grid style={{border:"solid"}} columns="equal">
          <Grid.Column>
            {this.props.spotify.tracks.items === undefined ?
              null
            :
              <SpotifyTracks />
            }
          </Grid.Column>
          <Grid.Column>
            {this.props.spotify.artists.items === undefined ?
              null
            :
              <SpotifyArtists />
            }
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spotify: state.spotify,
  }
}

export default connect(mapStateToProps, { getSpotifySelf, getSpotifyUserTopTracks, getSpotifyUserTopArtists, getSpotifyUserRecentTracks, searchSpotifyTrack, searchSpotifyArtist })(SpotifyPage);
