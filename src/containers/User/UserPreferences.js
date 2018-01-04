import React from 'react';
import { connect } from 'react-redux';
import { Grid, List, Icon } from 'semantic-ui-react';

import Loading from '../../components/Loading';


class UserPreferences extends React.Component {
  renderLikelyPreferences = () => {
    const { consumption_preferences } = this.props.personality.personalities;
    return consumption_preferences.map((category) => {
      return category.consumption_preferences.map((preference, index) => {
        return (preference.score === 1) ? (<List.Item key={index}><Icon name="check" />{`...${preference.name.split('Likely to')[1]}`}</List.Item>) : (null)
      })
    })
  }

  renderUnlikelyPreferences = () => {
    const { consumption_preferences } = this.props.personality.personalities;
    return consumption_preferences.map((category) => {
      return category.consumption_preferences.map((preference, index) => {
        return (preference.score === 0) ? (<List.Item key={index}><Icon name="x" />{`...${preference.name.split('Likely to')[1]}`}</List.Item>) : (null)
      })
    })
  }

  render() {
    if (this.props.personality.personalities.consumption_preferences === undefined) { return <Loading /> }

    return (
      <Grid columns="equal">
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column>
          <List>
            <List.Content>
              <List.Header as="h2" icon="true"><Icon name="smile" /> You are likely to...</List.Header>
              <List.Item as="ul">
                {this.renderLikelyPreferences()}
              </List.Item>
            </List.Content>
          </List>
        </Grid.Column>
        <Grid.Column>
          <List>
            <List.Content>
              <List.Header as="h2" icon="true"><Icon name="frown" /> You are unlikely to...</List.Header>
              <List.Item as="ul">
                {this.renderUnlikelyPreferences()}
              </List.Item>
            </List.Content>
          </List>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personality: state.personality,
  }
}

export default connect(mapStateToProps)(UserPreferences);
