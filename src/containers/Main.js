import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../actions/auth_actions';
import { fetchPersonality } from '../actions/personality_actions';

class Main extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.length === 0) {
      props.history.push('/login');
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') && !this.props.auth.isLoggedIn) {
      this.props.getCurrentUser();
      this.props.fetchPersonality();
    }
  }

  render() {
    return (
      <div>
        <h2>Hello World!</h2>

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
    getCurrentUser: getCurrentUser,
    fetchPersonality: fetchPersonality,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
