import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addClickTerm } from '../../actions/clickActions';
import { favoriteReddit, getRedditPost } from '../../actions/redditActions';
import { Grid, Segment, Image, Item, Icon } from 'semantic-ui-react';


class RedditItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovering: false,
      image: "",
      thumbnail: "",
    }
  }

  // convertDate = (date) => {
  //   var utcSeconds = date;
  //   var d = new Date(0);
  //   var seconds = d.setUTCSeconds(utcSeconds);
  //   var a = Date(seconds);
  //   return a;
  // }

  handleMouseOver = (image, thumbnail) => {
    this.setState({ isHovering: !this.state.isHovering }, () => {
      this.setState({ image: image, thumbnail: thumbnail })
    })
  }

  render() {
    const { post } = this.props;

    return (
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={9}>
          <Segment>
            <Item>
              <Grid columns="equal">
                <Grid.Column width={2}>
                  <Item align="center">
                    <br />
                    <Icon name='arrow up' /> <br /><br />
                    Votes: <br />
                    {post.data.score} <br /><br />
                    <Icon name='arrow down' />
                  </Item>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Item.Image as="a"
                    rounded
                    width="140px"
                    height="140px"
                    src={post.data.thumbnail}
                    href={post.data.url}
                    onMouseEnter={() => this.handleMouseOver(post.data.url, post.data.thumbnail)}
                    onMouseLeave={this.handleMouseOver}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Item.Content>
                    <Item.Header as='a' onClick={() => (this.props.addClickTerm(post.data.title + post.data.subreddit_name_prefixed).then(this.props.getRedditPost(post.data.permalink, this.props.history)))}>{post.data.title}</Item.Header>
                    <br /><br />
                    <Item.Meta>Author: {post.data.author}</Item.Meta>
                    <Item.Description>
                      Subreddit: {post.data.subreddit_name_prefixed} <br /><br />
                      Comments: {post.data.num_comments}
                    </Item.Description>
                    <Item.Extra>
                      <Icon name='heart' circular className="bottom-right" color="red" onClick={() => this.props.favoriteReddit(post)}/>
                    </Item.Extra>
                  </Item.Content>
                </Grid.Column>
              </Grid>
            </Item>
          </Segment>
        </Grid.Column>
        <Grid.Column width={5} align="center">
          {this.state.isHovering && <div><Image rounded src={this.state.image || this.state.thumbnail} /></div>}
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(connect(null, { favoriteReddit, getRedditPost, addClickTerm })(RedditItem));
