import React from 'react';

import { connect } from 'react-redux';

import Loading from '../components/Loading';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    if (!this.props.authentication) {
      return (
        <Loading />
      )
    }
    return (
      <div>
        This is UserShow {this.props.match.params.id}
        {this.props.authentication.user.username}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps)(UserShow);
