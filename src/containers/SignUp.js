import React from 'react'

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
        <form onSubmit={this.handleSignUp}>
          <input
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleChange}
          /><br />
          <input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          /><br />
          <input
            name="password_confirmation"
            type="password"
            value={this.state.password_confirmation}
            placeholder="Confirm Password"
            onChange={this.handleChange}
          /><br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp;
