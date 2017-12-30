import React from 'react';

import { connect } from 'react-redux';

import { spotifySetURI } from '../../actions/spotifyActions';

import { Grid, Card, Image, Icon } from 'semantic-ui-react';


class SpotifyTracks extends React.Component {
  convertTime = (ms) => {
    return parseInt((ms/ 1000 / 60), 10) + ":" + parseInt((ms / 1000 % 60), 10);
  }

  render() {
    return (
      <Grid style={{border: "solid"}}>
        <Grid.Column>
        <h2 align="center">Tracks</h2>
          <div>
          {this.props.spotify.tracks.items[0].album !== undefined ?
            <Card.Group itemsPerRow={3}>
              {this.props.spotify.tracks.items.map((item, index) => {
                return (
                  <Card key={index} onClick={() => this.props.spotifySetURI(item.uri)}>
                    <Image src={item.album.images[1].url} />
                    <Card.Content>
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Meta>{item.artists.map((artist) => artist.name).join(', ')}</Card.Meta>
                      <Card.Description>
                        Length: {this.convertTime(item.duration_ms)} <br />
                        Album: {item.album.name}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="star" /> {item.popularity}
                    </Card.Content>
                  </Card>
                )
              })}
            </Card.Group>
          :
            <Card.Group itemsPerRow={3}>
              {this.props.spotify.tracks.items.map((item, index) => {
                return (
                  <Card key={index} onClick={() => this.props.spotifySetURI(item.uri)}>
                    <Image src={item.track.album.images[1].url} />
                    <Card.Content>
                      <Card.Header>{item.track.name}</Card.Header>
                      <Card.Meta>{item.track.artists.map((artist) => artist.name).join(', ')}</Card.Meta>
                      <Card.Description>
                        Length: {this.convertTime(item.track.duration_ms)} <br />
                        Album: {item.track.album.name}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="star" /> {item.track.popularity}
                    </Card.Content>
                  </Card>
                )
              })}
            </Card.Group>
          }
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spotify: state.spotify,
  }
}

export default connect(mapStateToProps, { spotifySetURI })(SpotifyTracks);
