import React from 'react';
import { connect } from 'react-redux';

import { Item, Grid } from 'semantic-ui-react';
import RedditItem from './RedditItem';
import Loading from '../../components/Loading';

class RedditCustom extends React.Component {
  render() {
    if (this.props.reddit.custom.data === undefined) {
      return <Loading />
    }
    
    return (
      <Grid>
        <Grid.Column>
          <h3>Reddit Custom</h3>
          <Item.Group divided>
            {this.props.reddit.custom.data.children.map((post, index) => {
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

export default connect(mapStateToProps)(RedditCustom);
