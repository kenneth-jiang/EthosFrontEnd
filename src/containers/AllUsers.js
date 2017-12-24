import React from 'react';

import { connect } from 'react-redux';

import Loading from '../components/Loading';

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    console.log(this.props)
    if (!this.props.user.allUsers.users) {
      return (
        <Loading />
      )
    }
    return (
      <div>
        {this.props.user.allUsers.users.map(user => <li>{user.username}</li>)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AllUsers);
