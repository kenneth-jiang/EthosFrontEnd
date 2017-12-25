import React from 'react';

import { connect } from 'react-redux';

import Loading from '../../components/Loading';

class UserShow extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <Loading />
      )
    }
    return (
      <div>
        This is UserShow {this.props.match.params.id}
        {this.props.user.currentUser.username}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(UserShow);
