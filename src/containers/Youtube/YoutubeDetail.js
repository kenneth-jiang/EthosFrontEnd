import React from 'react';
import { connect } from 'react-redux';
import { Segment, Grid, Item, Image, Icon } from 'semantic-ui-react';

import { favoriteYoutube } from '../../actions/youtubeActions';


class YoutubeDetail extends React.Component {
  render() {
  const { currentVideo } = this.props.youtube;
    return (
      <Segment>
        <Item>
          <h2>{currentVideo.snippet.title}</h2>
          <Grid>
            <Grid.Column width={4}>
              <Image src={currentVideo.snippet.thumbnails.high.url} rounded />
            </Grid.Column>
            <Grid.Column width={12}>
              <h3><a href={`https://www.youtube.com/channel/${currentVideo.snippet.channelId}`}>{currentVideo.snippet.channelTitle}</a></h3>
              {currentVideo.snippet.publishedAt.split('T')[0]} <br />
              <h4>Description: {currentVideo.snippet.description} </h4>
              <div align="right"><Icon circular name="heart" color="red" align="right" onClick={() => this.props.favoriteYoutube(currentVideo)} /></div>
            </Grid.Column>
          </Grid>
        </Item>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    youtube: state.youtube,
  }
}

export default connect(mapStateToProps, { favoriteYoutube })(YoutubeDetail);
