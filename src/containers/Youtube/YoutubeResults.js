import React from 'react';

import { connect } from 'react-redux';

import { viewCurrentVideo } from '../../actions/youtubeActions';
import { Card } from 'semantic-ui-react';


class YoutubeResults extends React.Component {

  handleClick = (video) => {
    console.log(video)
    this.props.viewCurrentVideo(video);
  }

  render() {
    return (
      <Card.Group align="right" className="overflow" itemsPerRow={2}>
        {this.props.youtube.videos.map((video) => {
          return (
            <Card
              onClick={() => this.handleClick(video)}
              image={video.snippet.thumbnails.medium.url}
              header={video.snippet.title}
              description={video.snippet.description.slice(0, 85)+"..."}
            />
          )
        })}
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    youtube: state.youtube,
  }
}

export default connect(mapStateToProps, {viewCurrentVideo})(YoutubeResults);
