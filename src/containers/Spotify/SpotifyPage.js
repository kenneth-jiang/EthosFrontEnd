import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Card, Image, Menu, Dropdown, Icon } from 'semantic-ui-react';

import { getSpotifySelf, getSpotifyFeaturedPlaylists, getSpotifySelfPlaylists, getSpotifyUserTopTracks, getSpotifyUserTopArtists, getSpotifyUserRecentTracks, searchSpotifyTrack, searchSpotifyArtist } from '../../actions/spotifyActions';

import SpotifySearch from './SpotifySearch';
import SpotifyTracks from './SpotifyTracks';
import SpotifyArtists from './SpotifyArtists';
import SpotifyPlaylists from './SpotifyPlaylists';


class SpotifyPage extends React.Component {
  componentDidMount() {
    this.props.getSpotifySelf()
  }

  render() {
    const { getSpotifyUserTopTracks, getSpotifyFeaturedPlaylists, getSpotifyUserTopArtists, getSpotifyUserRecentTracks, getSpotifySelfPlaylists } = this.props;
    let options = [
      <Button fluid onClick={getSpotifyUserTopTracks}><Icon name="music" />Top Tracks</Button>,
      <Button fluid onClick={getSpotifyUserTopArtists}><Icon name="child" />Top Artists</Button>,
      <Button fluid onClick={getSpotifyUserRecentTracks}><Icon name="video play" />Recent Tracks</Button>,
      <Button fluid onClick={getSpotifySelfPlaylists}><Icon name="star" />My Playlists</Button>
    ];
    return (
      <div className="fulldisplay">
        <Grid columns="equal">
          <Grid.Column width={6} align="right">
            <SpotifySearch />
          </Grid.Column>
          <Grid.Column width={6} align="center">
            <iframe src={`https://open.spotify.com/embed?uri=${this.props.spotify.uri}`} title="spotifyplayer" width="300" height="380" frameBorder="5px" allowtransparency="true"></iframe>
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={2} align="center">
            <Card>
              <Image size="small" src={this.props.spotify.currentUser.icon_img|| "http://storage.proboards.com/5653400/images/WiVBrdfimYyUt7_FrM0c.png"} />
              <Card.Content>
                <Card.Header>
                  {this.props.spotify.currentUser.display_name || this.props.spotify.currentUser.id}
                </Card.Header>
              </Card.Content>
            </Card>
            <Menu compact>
              <Dropdown className="icon" icon='spotify' button floating labeled text='My Spotify' options={options} />
            </Menu>
          </Grid.Column>
        </Grid>
        <Grid columns="equal">
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
          <Grid.Column>
            {this.props.spotify.playlists === undefined || this.props.spotify.playlists.items === undefined ?
              null
            :
              <SpotifyPlaylists />
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

export default connect(mapStateToProps, { getSpotifySelf, getSpotifyFeaturedPlaylists, getSpotifySelfPlaylists, getSpotifyUserTopTracks, getSpotifyUserTopArtists, getSpotifyUserRecentTracks, searchSpotifyTrack, searchSpotifyArtist })(SpotifyPage);
