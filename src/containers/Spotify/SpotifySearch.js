import React from 'react';

import { connect } from 'react-redux';

import { searchSpotifyTrack, searchSpotifyArtist } from '../../actions/spotifyActions';
import { Form, Input, Button } from 'semantic-ui-react';


class SpotifySearch extends React.Component {
  constructor() {
    super();
    this.state = {
      trackSearchTerm: "",
      artistSearchTerm: "",
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state));
  }

  render() {
    return (
      <div align="center">
        <h2>Search for a Track or an Artist!</h2>
        <Form onSubmit={() => this.props.searchSpotifyTrack(this.state.trackSearchTerm).then(this.setState({trackSearchTerm: ""}))}>
          <Input name="trackSearchTerm" value={this.state.trackSearchTerm} onChange={this.handleChange} placeholder="Search for a Track" />
          <Button type="submit">Search Song</Button>
        </Form>
        <Form onSubmit={() => this.props.searchSpotifyArtist(this.state.artistSearchTerm)}>
          <Input value={this.state.artistSearchTerm} name="artistSearchTerm" onChange={this.handleChange} placeholder="Search for an Artist" />
          <Button type="submit">Search Artist</Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, { searchSpotifyTrack, searchSpotifyArtist })(SpotifySearch);
