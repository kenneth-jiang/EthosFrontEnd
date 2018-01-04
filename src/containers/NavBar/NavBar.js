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
      <Menu color="black" attached='top' inverted compact>
        <Menu.Item>
          <Button onClick={this.props.toggleSideBarVisibility}>
            <Icon name="sidebar" />
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
          <Dropdown text={this.props.user.currentUser.user.username} icon='sidebar' floating labeled button className='icon'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink style={{color:"black"}} to={`/user/${this.props.user.currentUser.user.id}`}>
                  <Icon name="user circle" />Profile
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.logoutUser(this.props.props.history)}>
                <Icon name="log out" />
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
    sidebar: state.sidebar
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
