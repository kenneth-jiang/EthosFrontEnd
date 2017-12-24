import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser, loginUser, logoutUser, getCurrentUser } from '../actions/auth_actions';

import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <Menu attached='top'>
        <Menu.Item>
          <Link to='/'>
            Main
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/signup'>
            Sign Up
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/search'>
            Search
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/results'>
            Results
          </Link>
        </Menu.Item>
        {!this.props.auth.isLoggedIn ?
        <Menu.Item position='right'>
          <Link to='/login'>
            Log In
          </Link>
        </Menu.Item>
        :
        <Menu.Item position='right'>
          <Dropdown text={this.props.auth.user.username} icon='user' floating labeled button className='icon'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/profile'>
                  Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={this.props.logoutUser}>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      }
      </Menu>
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
    signupUser: signupUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    getCurrentUser: getCurrentUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
