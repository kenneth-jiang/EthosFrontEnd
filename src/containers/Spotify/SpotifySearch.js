import React from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Input, Button, Image } from 'semantic-ui-react';

import { searchSpotifyTrack, searchSpotifyArtist, searchSpotifyPlaylists, getSpotifyFeaturedPlaylists } from '../../actions/spotifyActions';


class SpotifySearch extends React.Component {
  constructor() {
    super();
    this.state = {
      trackSearchTerm: "",
      artistSearchTerm: "",
      playlistSearchTerm: "",
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image src="http://wfarm2.dataknet.com/static/resources/icons/set112/ec7816a7.png" /> <br />
        </Grid.Column>
        <Grid.Column width={10}>
        <br />
        <h4>Check out today&rsquo;s hits! &nbsp;&nbsp;<Button onClick={() => this.props.getSpotifyFeaturedPlaylists()}>Featured Hits</Button></h4>
        <h4>...Or you can search below!</h4>
        <br />
        <Form onSubmit={() => this.props.searchSpotifyTrack(this.state.trackSearchTerm).then(this.setState({trackSearchTerm: ""}))}>
          <Form.Input name="trackSearchTerm" value={this.state.trackSearchTerm} onChange={this.handleChange} placeholder="Search for a Track" action={"Search Track"} />
        </Form>
        <Form onSubmit={() => this.props.searchSpotifyArtist(this.state.artistSearchTerm).then(this.setState({artistSearchTerm: ""}))}>
          <Form.Input value={this.state.artistSearchTerm} name="artistSearchTerm" onChange={this.handleChange} placeholder="Search for an Artist" action={"Search Artist"} />
        </Form>
        <Form onSubmit={() => this.props.searchSpotifyPlaylists(this.state.playlistSearchTerm).then(this.setState({playlistSearchTerm: ""}))}>
          <Form.Input value={this.state.playlistSearchTerm} name="playlistSearchTerm" onChange={this.handleChange} placeholder="Search for a Playlist" action={"Search Playlist"} />
        </Form>
        <br />
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(null, { searchSpotifyTrack, searchSpotifyArtist, searchSpotifyPlaylists, getSpotifyFeaturedPlaylists })(SpotifySearch);
