import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser } from '../../actions/authenticationActions';

import { Form, Button } from 'semantic-ui-react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      errors: false,
    }
  }

  handleSignUp = (event) => {
    event.preventDefault();
    const { username, password, password_confirmation } = this.state
    this.props.signupUser({ user: { username, password, password_confirmation } }, this.props.history)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value },
      () => this.state.password !== this.state.password_confirmation ? this.setState({ errors: "Passwords must match!" }) : this.setState({ errors: false }));
  }

  render() {
    return (
      <div>
        {!this.props.authentication.isLoggedIn ?
          (<div>
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
              {this.state.errors ? this.state.errors : null}
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
    signupUser: signupUser,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
