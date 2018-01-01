import React from 'react';

import { connect } from 'react-redux';

import YoutubeSearch from './YoutubeSearch';
import YoutubeResults from './YoutubeResults';
import YoutubeDetail from './YoutubeDetail';

import { Grid, Embed } from 'semantic-ui-react';


class YoutubePage extends React.Component {
  renderPlayer = () => {
    const { youtube } = this.props;
    return (
      <Embed
        id={ (youtube.currentVideo.id !== undefined) ? (youtube.currentVideo.id.videoId) : (null) }
        width="900"
        height="550"
        source='youtube'
      />
    )
  }

  renderDetail = () => {
    if (this.props.youtube.currentVideo.snippet === undefined) {
      return null;
    } else {
      return <YoutubeDetail />
    }
  }

  renderResults = () => {
    if (this.props.youtube.videos.length === 0) {
      return null;
    } else {
      return <YoutubeResults />
    }
  }

  render() {
    return (
      <Grid className="fulldisplay">
        <Grid.Column align="center" width={10}>
          <YoutubeSearch /><br />
          {this.renderPlayer()}<br /><br />
          {this.renderDetail()}
        </Grid.Column>
        <Grid.Column align="right" width={6}>
          {this.renderResults()}
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
