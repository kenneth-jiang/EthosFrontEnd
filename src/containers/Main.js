import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentUser } from '../actions/auth_actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') && !this.props.auth.isLoggedIn) {
      this.props.currentUser();
    }
  }

  render() {
    return (
      <div>
        <h2>Main</h2><br/>
        <button>{this.props.auth.user.username}</button><br/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    currentUser: currentUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
