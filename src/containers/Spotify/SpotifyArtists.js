import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Card, Image, Icon } from 'semantic-ui-react';

import { getArtistTracks } from '../../actions/spotifyActions';


class SpotifyArtists extends React.Component {
  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column>
          <h2 align="center">Artists</h2>
          <Card.Group itemsPerRow={2}>
            {this.props.spotify.artists.items.map((item, index) => {
              return (
                <Card key={index} onClick={() => this.props.getArtistTracks(item.id, item.name)}>
                  <Image src={item.images.length !== 0 ? item.images[1].url : null } />
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>Genres: {item.genres.map((genre) => genre).join(', ')}</Card.Meta>
                    <Card.Description>
                      Followers: {item.followers.total}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="star" /> Popularity: {item.popularity}
                  </Card.Content>
                </Card>
              )
            })}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spotify: state.spotify,
  }
}

export default connect(mapStateToProps, { getArtistTracks })(SpotifyArtists);
