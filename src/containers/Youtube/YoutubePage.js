import React from 'react';

import { connect } from 'react-redux';

import YoutubeSearch from './YoutubeSearch';
import YoutubeResults from './YoutubeResults';
import YoutubeDetail from './YoutubeDetail';

import { Grid } from 'semantic-ui-react';


class YoutubePage extends React.Component {
  renderPlayer = () => {
    const { youtube } = this.props;
    const embeddedUrl = "http://www.youtube.com/embed/";
    return (
      <iframe
        title="youtube"
        id="player"
        type="text/html"
        width="900"
        height="550"
        src={ (youtube.currentVideo.id !== undefined) ? (embeddedUrl + youtube.currentVideo.id.videoId) : (embeddedUrl) }
        frameBorder="5">
      </iframe>
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
