import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser, loginUser, logoutUser, getCurrentUser } from '../actions/authentication_actions';
import { toggleSideBarButton } from '../actions/sidebar_actions';

import { NavLink, Link } from 'react-router-dom';
import { Button, Menu, Dropdown } from 'semantic-ui-react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "" }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state;
    return (
      <Menu attached='top' inverted compact>
        <Menu.Item name='SideBar' active={activeItem === 'SideBar'} onClick={this.handleItemClick}>
          <Button onClick={this.props.toggleSideBarButton}>
            Toggle SideBar
          </Button>
        </Menu.Item>
        <Menu.Item name='Main' active={activeItem === 'Main'} onClick={this.handleItemClick}>
          <Link to='/'>
            Main
          </Link>
        </Menu.Item>
        <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick}>
          <Link to='/signup'>
            Sign Up
          </Link>
        </Menu.Item>
        <Menu.Item name='Search' active={activeItem === 'Search'} onClick={this.handleItemClick}>
          <Link to='/search'>
            Search
          </Link>
        </Menu.Item>
        <Menu.Item name='Results' active={activeItem === 'Results'} onClick={this.handleItemClick}>
          <Link to='/results'>
            Results
          </Link>
        </Menu.Item>
        {!this.props.authentication.isLoggedIn ?
        <Menu.Item position='right'name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick}>
          <Link to='/login'>
            Log In
          </Link>
        </Menu.Item>
        :
        <Menu.Item position='right' name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick}>
          <Dropdown text={this.props.authentication.user.username} icon='user' floating labeled button className='icon'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to='/profile'>
                  Profile
                </NavLink>
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
    authentication: state.authentication,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signupUser: signupUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    getCurrentUser: getCurrentUser,
    toggleSideBarButton: toggleSideBarButton,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
