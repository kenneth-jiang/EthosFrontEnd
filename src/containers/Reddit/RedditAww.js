import React from 'react';
import { connect } from 'react-redux';

import { getRedditAww } from '../../actions/redditActions';
import { Item, Grid } from 'semantic-ui-react';
import RedditItem from './RedditItem';
import Loading from '../../components/Loading';

class RedditAww extends React.Component {
  componentDidMount() {
    this.props.getRedditAww();
  }

  render() {
    if (this.props.reddit.aww.data === undefined) {
      return <Loading />
    }
    return (
      <Grid>
        <Grid.Column>
          <h3 align="center">r/aww</h3>
          <Item.Group divided>
            {this.props.reddit.aww.data.children.map((post, index) => {
              return (
                <RedditItem key={index} post={post} />
              )
            })}
          </Item.Group>
        </Grid.Column>
    </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reddit: state.reddit
  }
}

export default connect(mapStateToProps, { getRedditAww })(RedditAww);
