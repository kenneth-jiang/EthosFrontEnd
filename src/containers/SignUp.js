import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser } from '../actions/auth_actions';

import { Form, Button } from 'semantic-ui-react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
    }
  }

  handleSignUp = (event) => {
    event.preventDefault();
    this.props.signupUser({ user: this.state })
    // if (this.props.auth.isLoggedIn) {
    //   this.props.history.push('/')
    // } else {
    //   alert('error')
    // }
      // want to redirect to home page after successfully created a user && want to set currentUser to this user
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <Form size="mini" onSubmit={this.handleSignUp}>
          <Form.Group>
            <Form.Input required
              name="username"
              value={this.state.username}
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              name="password"
              type="password"
              value={this.state.password}
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              name="password_confirmation"
              type="password"
              value={this.state.password_confirmation}
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
          <Button type='submit'>Sign Up</Button>
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
    signupUser: signupUser,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
