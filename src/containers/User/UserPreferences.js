import React from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';


class UserPreferences extends React.Component {
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
  
  render() {
    if (Object.keys(this.props.personalities).length === 0 && this.props.personalities.constructor === Object) {
        return <Loading />;
    }

    return (
      <div>
        {this.userConsumptionPreference()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personalities: state.personality.personalities,
  }
}

export default connect(mapStateToProps)(UserPreferences);
