import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, List, Item, Icon } from 'semantic-ui-react';

import Loading from '../../components/Loading'


class RedditPost extends React.Component {
  // convertDate = (date) => {
  //   console.log(date);
  //   var d = new Date(date);
  //   return d.toLocaleString(); // expected output: "7/25/2016, 1:35:07 PM"
  // }

  getChildren = (child) => {
    if (child.data.replies !== undefined) {
      if (child.data.replies.data !== undefined) {
        if (child.data.replies.data.children !== undefined) {
          return (
            <ul>
              {child.data.replies.data.children.map((child, index) => {
                return (
                  <div key={index}>
                    {child.data.body ?
                      <Segment>
                        <List.Item>
                          <List.Content>
                            <List.Header><strong>{child.data.author}</strong> {child.data.score >= 0 ? <Icon name='arrow up' /> : <Icon name='arrow down' />} {`${child.data.score} points`} </List.Header>
                            <List.Description>{child.data.body}</List.Description>
                              <br /> {this.getChildren(child)}
                          </List.Content>
                        </List.Item>
                      </Segment>
                    :
                      null
                    }
                  </div>
                )
              })}
            </ul>
          )
        }
      }
    }
    return null;
  }

  render() {
    if (this.props.reddit.currentPost.length === 0) {
      return <Loading />
    }
    const { reddit } = this.props;
    return (
      <Grid>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Segment>
            <Item>
              <Grid columns="equal">
                <Grid.Column width={2}>
                  <Item align="center">
                    <br />
                    <Icon name='arrow up' /> <br /><br />
                    Votes: <br />
                    {reddit.currentPost[0].data.children[0].data.score} <br /><br />
                    <Icon name='arrow down' />
                  </Item>
                </Grid.Column>

                <Grid.Column align="center" width={4}>
                  <Item.Image size="large" href={reddit.currentPost[0].data.children[0].data.url} src={reddit.currentPost[0].data.children[0].data.thumbnail} />
                </Grid.Column>

                <Grid.Column>
                  <Item.Content>
                    <Item.Header><h3>{reddit.currentPost[0].data.children[0].data.title}</h3></Item.Header>
                    <Item.Meta>{reddit.currentPost[0].data.children[0].data.selftext}</Item.Meta>
                    <Item.Description>
                      Author: {reddit.currentPost[0].data.children[0].data.author} <br />
                      Subreddit: {reddit.currentPost[0].data.children[0].data.subreddit_name_prefixed} <br /><br />
                      Comments: {reddit.currentPost[0].data.children[0].data.num_comments} <br />
                      <Icon name='heart' circular className="bottom-right" color="red" onClick={() => this.props.favoriteReddit(reddit.currentPost)}/>
                    </Item.Description>
                  </Item.Content>
                </Grid.Column>
              </Grid>
            </Item>
            </Segment>
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <ol>
          {reddit.currentPost[1].data.children.map((child, index) => {
            return (
              <div key={index}>
                {child.data.body ?
                  <Segment>
                    <List.Item>
                      <List.Content>
                        <List.Header><strong>{child.data.author}</strong> {child.data.score >= 0 ? <Icon name='arrow up' /> : <Icon name='arrow down' />} {`${child.data.score} points`} </List.Header>
                        <List.Description>{child.data.body}</List.Description>
                          <br /> {this.getChildren(child)}
                      </List.Content>
                    </List.Item>
                  </Segment>
                :
                  null
                }
            </div>
            )
          })}
          </ol>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    reddit: state.reddit,
  }
}

export default connect(mapStateToProps)(RedditPost);
