import React from 'react';
import { connect } from 'react-redux';

import { getRedditFunny } from '../../actions/redditActions';
import { Item, Grid } from 'semantic-ui-react';
import RedditItem from './RedditItem';
import Loading from '../../components/Loading';

class RedditFunny extends React.Component {
  componentDidMount() {
    this.props.getRedditFunny();
  }

  render() {
    if (this.props.reddit.funny.data === undefined) {
      return <Loading />
    }
    console.log(this.props)
    return (
      <Grid>
        <Grid.Column>
          <h3>Reddit Funny</h3>
          <Item.Group divided>
            {this.props.reddit.funny.data.children.map((post, index) => {
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

export default connect(mapStateToProps, { getRedditFunny })(RedditFunny);
