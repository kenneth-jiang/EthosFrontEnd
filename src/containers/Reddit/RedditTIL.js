import React from 'react';
import { connect } from 'react-redux';

import { getRedditTIL } from '../../actions/redditActions';
import { Item, Grid } from 'semantic-ui-react';
import RedditItem from './RedditItem';
import Loading from '../../components/Loading';

class RedditTIL extends React.Component {
  componentDidMount() {
    this.props.getRedditTIL();
  }

  render() {
    if (this.props.reddit.til.data === undefined) {
      return <Loading />
    }
    return (
      <Grid>
        <Grid.Column>
          <h3>Reddit TIL</h3>
          <Item.Group divided>
            {this.props.reddit.til.data.children.map((post, index) => {
              return (
                <RedditItem key={index} post={post}/>
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

export default connect(mapStateToProps, { getRedditTIL })(RedditTIL);
