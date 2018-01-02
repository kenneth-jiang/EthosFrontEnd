import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Form, Input, Button, Checkbox } from 'semantic-ui-react';

import { signupUser } from '../../actions/authenticationActions';
import alreadyAuthenticated from '../../hoc/alreadyAuthenticated';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      switchInputs: false,
      first_name: "",
      last_name: "",
      email: "",
      birthday: "",
      gender: "",
      phone: "",
      interests: "",
      about: "",
      location: "",
      private: false,
      errors: false,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value },
      () => this.state.password !== this.state.password_confirmation ? this.setState({ errors: "Passwords must match!" }) : this.setState({ errors: false }));
  }

  render() {
    const { username, password, password_confirmation, first_name, last_name, email, birthday, gender, phone, interests, about, location } = this.state;
    return (
      <div className="fulldisplay">
        {!this.state.switchInputs ?
          <div className="fulldisplay" align="center" style={{backgroundImage: "url(http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-planets-stars-galaxies-nebulae-sci-fi-awesome/wallpaper-azure-planet.jpg)", backgroundSize: "cover" }}>
            <br /><br />
            <h1 style={{color:"white"}}>Welcome to Ethos!</h1>
            <br /><br />
            <h3 style={{color:"silver"}}>Please create a new account!</h3>
            <br />
            <Form size="small">
              <Input required
                icon='user circle'
                iconPosition='left'
                name="username"
                value={username}
                placeholder="Choose a username"
                onChange={this.handleChange}
              /> <br />
              <Input
                icon='lock'
                iconPosition='left'
                name="password"
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={this.handleChange}
              /> <br />
              <Input
                icon='lock'
                iconPosition='left'
                name="password_confirmation"
                type="password"
                value={password_confirmation}
                placeholder="Confirm password"
                onChange={this.handleChange}
              /> <br />
              <div style={{color:"white"}}>{this.state.errors ? this.state.errors : null}</div> <br />
              <Button onClick={() => this.setState({ switchInputs: true })}>Continue</Button>
            </Form> <br />
            <div style={{color:"white"}}>Already have an account? Log in <Link to={'/login'}>here</Link></div>
          </div>
        :
          <Grid columns="equal" className="fulldisplay" style={{backgroundImage:"url(https://i.pinimg.com/originals/d5/c3/24/d5c324092319ac38ef05610b74971378.jpg)", backgroundSize: "cover"}}>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={10}>
              <br />
              <h2 align="center" style={{color:"white"}}>Enter your Info!</h2>
              <br />
              <Form onSubmit={() => this.props.signupUser(this.state, this.props.history)}>
                <Form.Group>
                  <Form.Input label="First Name" name="first_name" placeholder="First Name" width={5} value={first_name} onChange={this.handleChange} />
                  <Form.Input label="Last Name" name="last_name" placeholder="Last Name" width={5} value={last_name} onChange={this.handleChange} />
                  <Form.Input label="E-mail" name="email" type="email" placeholder="E-mail Address" width={6} value={email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Input label="Phone Num (xxx-xxx-xxxx)" name="phone" type="tel" placeholder="Phone Number" pattern="^\d{3}-\d{3}-\d{4}$" value={phone} width={3} onChange={this.handleChange} />
                  <Form.Input label="Birthday" name="birthday" type="date" value={birthday} width={3} onChange={this.handleChange} />
                  <Form.Input label="Gender" name="gender" placeholder='Gender' value={gender} width={4} onChange={this.handleChange} />
                  <Form.Input label="Location" name="location" placeholder="Location" value={location} width={6} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.TextArea label="Interests" name= "interests" placeholder="Interests" autoHeight value={interests} width={16} rows={2} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.TextArea label="About You" name= "about" placeholder="About You" value={about} autoHeight width={16} rows={2} onChange={this.handleChange} />
                </Form.Group>
                <Form.Field control={Checkbox} label="Set profile to private? (You can change this later.)" checked={this.state.private} onChange={() => this.setState({ private: !this.state.private })}/>
                <Form.Button type="submit">Submit</Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={3}>
            </Grid.Column>
          </Grid>
        }
      </div>
    )
  }
}

export default alreadyAuthenticated(connect(null, { signupUser })(SignUp));
