import React from 'react';

import { connect } from 'react-redux';

import { getUserPersonality } from '../../actions/personalityActions';
import Loading from '../../components/Loading';

class UsersShow extends React.Component {
  componentDidMount() {
    this.props.getUserPersonality();
  }

  userConsumptionPreference = () => {
    return (
      <ol>
        {this.props.personalities.consumption_preferences.map((parent_category, index) => {
          return (
            <li key={index}>
              <strong>{parent_category.name}</strong> <br />
              <ol>
                {parent_category.consumption_preferences.map((child_category, index) => {
                  return (
                    <li key={index}>
                      {child_category.name} <br/>
                      Score: {child_category.score}
                    </li>
                  )
                })}
              </ol>
              <br />
            </li>
          )
        })}
      </ol>
    )
  }

  userNeeds = () => {
    return (
      <ol>
        {this.props.personalities.needs.map((need, index) => {
          return (
            <li key={index}>
              <strong>{need.name}</strong> <br />
              Percentile: {need.percentile} <br />
              Score: {need.raw_score} <br />
              Significant: {need.significant ? "true" : "false"} <br />
              <br />
            </li>
          )
        })}
      </ol>
    );
  }


  userPersonality = () => {
    return (
      <ol>
        {this.props.personalities.personality.map((trait, index) => {
        return (
          <li key={index}>
            <strong>{trait.name}</strong> <br />
            Percentile: {trait.percentile} <br />
            Score: {trait.raw_score} <br />
            Significant: {trait.significant ? "true" : "false"} <br />
            Traits:
              <ol>
                {trait.children.map((child) => {
                  return (
                    <li key={child.trait_id}>
                      <strong>{child.name}</strong> <br />
                      Percentile: {child.percentile} <br />
                      Score: {child.raw_score} <br />
                      Significant: {child.significant ? "true" : "false"} <br />
                    </li>
                  )
                })}
              </ol>
            <br/ >
          </li>
        )
      })}
      </ol>
    )
  }

  userValues = () => {
    return (
      <ol>
        {this.props.personalities.values.map((value) => {
          return (
            <li key={value.trait_id}>
              <strong>{value.name}</strong> <br />
              Percentile: {value.percentile} <br />
              Score: {value.raw_score} <br />
              Significant: {value.significant} <br />
              <br />
            </li>
            )
        })}
      </ol>
    )
  }

  render() {
    if (Object.keys(this.props.personalities).length === 0 && this.props.personalities.constructor === Object) {
        return <Loading />;
    }

    const { personalities } = this.props;
    return (
      <div className="overflow" style={{height: "100%"}}>
        <h1>{`ID: ${this.props.match.params.id} ${this.props.user.currentUser.user.username}'s Show Page`}</h1> <br />
        <h3>Message:</h3> {personalities.word_count_message} <br /><br />
        <h3>Consumption Preference:</h3> {this.userConsumptionPreference()} <br />
        <h3>Needs:</h3> {this.userNeeds()} <br />
        <h3>Personality:</h3> {this.userPersonality()} <br />
        <h3>Values:</h3> {this.userValues()} <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    personalities: state.personality.personalities,
  }
}

export default connect(mapStateToProps, {getUserPersonality})(UsersShow);

// Consumption Preference: {this.userConsumptionPreference()} <br />
// Needs: {this.userNeeds()} <br />
// Personality: {this.userPersonality()} <br />
// Values: {this.userValues()} <br />
