import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Input, Icon, Image } from 'semantic-ui-react'

import { loginUser, getProfilePic } from '../../actions/authenticationActions';
import alreadyAuthenticated from '../../hoc/alreadyAuthenticated';


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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getProfilePic(this.state.username);
    this.setState({ switchInputs: true });
  }

  render() {
    return (
      <div align="center" className="fulldisplay" style={{backgroundImage: "url('https://i.pinimg.com/originals/74/86/0d/74860d725facc1a763261b4fd10c3a12.jpg')", backgroundSize: "cover"}}>
        <br /><br />
        <h1 style={{color:"white"}}>Welcome to Ethos!</h1>
        <br /><br /><br /><br /><br />
        <Image size="small" bordered circular src={this.props.authentication.profile_pic || "https://success.salesforce.com/resource/tdxlib/img/default-user.png"} />
        <br />
        {!this.state.switchInputs ?
          <Form size="mini" onSubmit={this.handleSubmit}>
            <Input
              size="large"
              name="username"
              value={this.state.username}
              placeholder="Enter username"
              onChange={this.handleChange}
            />
            <Button icon type="submit"><Icon name="arrow right" /></Button>
            <br /><br />
            <Button disabled>Login</Button>
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
            /> <br />
            {this.props.authentication.error}
            <br />
            <Button type="submit">Login</Button>
          </Form>
        }
        <br /><br /><br />
        Don&apos;t have an account? Sign up <Link to={'/signup'} >here</Link>!
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication,
  }
}

export default alreadyAuthenticated(connect(mapStateToProps, { loginUser, getProfilePic })(Login));
