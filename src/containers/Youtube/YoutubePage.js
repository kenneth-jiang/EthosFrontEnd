import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Embed } from 'semantic-ui-react';

import YoutubeSearch from './YoutubeSearch';
import YoutubeResults from './YoutubeResults';
import YoutubeDetail from './YoutubeDetail';


class YoutubePage extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <YoutubeSearch /> <br />
          <Segment><Embed id={(this.props.youtube.currentVideo.id !== undefined) ? (this.props.youtube.currentVideo.id.videoId) : (null)} width="900" height="550" source='youtube' /></Segment>
          {this.props.youtube.currentVideo.snippet !== undefined ? <YoutubeDetail /> :null}
        </Grid.Column>
        <Grid.Column align="right" width={6}>
          {this.props.youtube.videos ? <YoutubeResults /> : null}
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    youtube: state.youtube,
  }
}

export default connect(mapStateToProps)(YoutubePage);
