import React from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Input, Select, Radio, TextArea, Button, Checkbox } from 'semantic-ui-react';

import { signupUserInfo } from '../../actions/userActions';


class SignUpInfo extends React.Component {
  constructor() {
    super();
    this.state = {
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
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  render() {
    console.log(this.props)
    const options = [
      { key: 'male', text: 'Male', value: 'male' },
      { key: 'female', text: 'Female', value: 'female' },
      { key: 'other', text: 'Other', value: 'other' },
    ]
    const { first_name, last_name, email, birthday, gender, phone, interests, about, location } = this.state;

    return (
      <Grid columns="equal">
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <br />
        <h2 align="center">Enter your Info!</h2>
          <br />
        <Form onSubmit={() => this.props.signupUserInfo(this.state, this.props.history)}>
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
    )
  }
}

export default connect(null, {signupUserInfo})(SignUpInfo);
