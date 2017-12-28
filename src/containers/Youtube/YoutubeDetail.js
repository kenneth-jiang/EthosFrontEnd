import React from 'react';

import { connect } from 'react-redux';


class YoutubeDetail extends React.Component {
  render() {
    return (
      <div>
        Title: {this.props.youtube.currentVideo.snippet.title} <br />
        Description: {this.props.youtube.currentVideo.snippet.description} <br />
        Date: {this.props.youtube.currentVideo.snippet.publishedAt.split('T')[0]} <br />
        Channel Title: <a href={`https://www.youtube.com/channel/${this.props.youtube.currentVideo.snippet.channelId}`} >{this.props.youtube.currentVideo.snippet.channelTitle}</a> <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    youtube: state.youtube,
  }
}

export default connect(mapStateToProps)(YoutubeDetail);
