import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
  }

  handleLogin = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: this.state })
    })
      .then(resp => resp.json())
      .then(data => localStorage.setItem('token', data.token))
      // want to redirect to home page after successfully logged in a user && want to set currentUser to this user
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <input
            name="username"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.handleChange}
          /><br/>
          <input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handleChange}
          /><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
