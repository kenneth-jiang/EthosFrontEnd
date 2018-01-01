import React from 'react';

class User extends React.Component {
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
  render() {
    return (
      <div>
        {this.userNeeds()}
      </div>
    )
  }
}

export default User;
