import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Card, Image, Icon } from 'semantic-ui-react';

import { spotifySetURI } from '../../actions/spotifyActions';


class SpotifyPlaylists extends React.Component {
  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column>
          <h2 align="center">Playlists</h2>
            <Card.Group itemsPerRow={2}>
              {this.props.spotify.playlists.items.map((item, index) => {
                return (
                  <Card key={index} onClick={() => this.props.spotifySetURI(item.uri)}>
                    {item.images[0].url ? <Image src={item.images[0].url} /> : null}
                    <Card.Content>
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Meta>{item.owner.display_name}</Card.Meta>
                      <Card.Description>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
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

export default connect(mapStateToProps, { spotifySetURI })(SpotifyPlaylists);
