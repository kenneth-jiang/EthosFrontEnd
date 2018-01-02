import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser, loginUser, logoutUser } from '../../actions/authenticationActions';
import { getCurrentUser } from '../../actions/userActions';
import { toggleSideBarVisibility } from '../../actions/sidebarActions';

import { NavLink, Link } from 'react-router-dom';
import { Button, Menu, Dropdown, Icon } from 'semantic-ui-react';

class NavBar extends React.Component {
  render () {
    return (
      <Menu attached='top' inverted compact>
        <Menu.Item>
          <Button onClick={this.props.toggleSideBarVisibility}>
            Toggle SideBar
          </Button>
        </Menu.Item>
        {!this.props.authentication.isLoggedIn || !this.props.user.currentUser.user ?
        <Menu.Item position='right'>
          <Link to='/login'>
            Log In
          </Link>
        </Menu.Item>
        :
        <Menu.Item position='right'>
          <Dropdown text={this.props.user.currentUser.user.username} icon='user' floating labeled button className='icon'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to={`/user/${this.props.user.currentUser.user.id}`}>
                  Profile
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.logoutUser(this.props.props.history)}>
                <Icon name="shutdown" />
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
    authentication: state.authentication,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signupUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    toggleSideBarVisibility,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
