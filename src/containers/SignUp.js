import React from 'react'

import { Form, Button } from 'semantic-ui-react'

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
    fetch('http://localhost:3001/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ user: this.state })
    })
      .then(resp => resp.json())
      .then(data => localStorage.setItem('token', data.token))
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

export default SignUp;
