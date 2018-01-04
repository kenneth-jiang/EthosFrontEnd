import React from 'react';
import { connect } from 'react-redux';
import { getUserFavorites } from '../../actions/userActions';
import { Grid } from 'semantic-ui-react';


class UserFavorites extends React.Component {
  componentDidMount() {
    this.props.getUserFavorites();
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
        <Grid.Column>
          News
        </Grid.Column>
        <Grid.Column>
          Sources
        </Grid.Column>
        <Grid.Column>
          Wolfram
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
          Youtube
        </Grid.Column>
        <Grid.Column>
          Reddit
        </Grid.Column>
        <Grid.Column>
          Spotify
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(null, { getUserFavorites })(UserFavorites);
