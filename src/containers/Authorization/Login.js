import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, logoutUser } from '../../actions/authenticationActions';

import { Form, Button, Input, Icon } from 'semantic-ui-react'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      switchInputs: false,
    }
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.loginUser({ user: this.state }, this.props.history);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        {!this.props.authentication.isLoggedIn ?
          (<div align="center">
            <h2>Login</h2>
            {!this.state.switchInputs ?
              <Form size="mini" onSubmit={() => this.setState({ switchInputs: true })}>
                <Input
                  size="large"
                  name="username"
                  value={this.state.username}
                  placeholder="Enter username"
                  onChange={this.handleChange}
                />
                <Button icon type="submit"><Icon name="arrow right" /></Button>
              </Form>
            :
              <Form size="mini" onSubmit={this.handleLogin}>
                <Button icon type="button" onClick={() => this.setState({ switchInputs: false })}><Icon name="arrow left" /></Button>
                <Input
                  size="large"
                  name="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Enter password"
                  onChange={this.handleChange}
                /> <br /><br />
                {this.props.authentication.error}
                <Button type="submit">Login</Button>
              </Form>
            }
          </div>)
        :
          (<Redirect to='/' />)
        }
      </div>
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
    loginUser: loginUser,
    logoutUser: logoutUser,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
