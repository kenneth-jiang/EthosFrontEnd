import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import { addClickTerm } from '../../actions/clickActions';
import { viewCurrentVideo } from '../../actions/youtubeActions';


class YoutubeResults extends React.Component {
  handleClick = (video) => {
    this.props.addClickTerm(video.snippet.title + video.snippet.description);
    this.props.viewCurrentVideo(video);
  }

  render() {
    return (
      <Card.Group align="right" className="overflow" itemsPerRow={2}>
        {this.props.youtube.videos.map((video, index) => {
          return (
            <Card
              key={index}
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

export default connect(mapStateToProps, { viewCurrentVideo, addClickTerm })(YoutubeResults);
