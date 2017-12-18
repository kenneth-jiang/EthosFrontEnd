import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, logoutUser } from '../actions/auth_actions';

import { Form, Button } from 'semantic-ui-react'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.loginUser({ user: this.state });
      // want to redirect to home page after successfully logged in a user && want to set currentUser to this user
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Form size="mini" onSubmit={this.handleLogin}>
          <Form.Group>
          <Form.Input
            name="username"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Button type="submit">Login</Button>
          </Form.Group>
        </Form>
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
    loginUser: loginUser,
    logoutUser: logoutUser,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
