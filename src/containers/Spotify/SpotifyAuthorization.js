import React from 'react';
import { connect } from 'react-redux';
import { spotifyAccessToken } from '../../actions/spotifyActions';
import Loading from '../../components/Loading';

class SpotifyAuthorization extends React.Component {
  componentDidMount() {
    this.props.spotifyAccessToken(this.props.history, this.props.location)
  }

  render() {
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

export default connect(null, { spotifyAccessToken })(SpotifyAuthorization);
