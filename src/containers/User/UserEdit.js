import React from 'react';
import { Form, Input, Checkbox, TextArea, Button } from 'semantic-ui-react';


class User extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      month: "",
      day: "",
      year: "",
      gender: "",
      area_code: "",
      phone_number_1: "",
      phone_number_2: "",
      biography: "",
      interests: "",
      location: "",
    }
  }

  render() {
    return (
      <div>
        Enter your Info!
        <Form>
          First Name: <Input name="first_name" placeholder="First Name" width={6}/>
          <Form.Input name="last_name" placeholder="Last Name" />
          <Form.Input name="email" type="email" placeholder="Email Address" />
          <Form.Input name="month" type="number" maxLength="2"/>
          <Form.Input name="day" type="number" maxLength="2" />
          <Form.Input name="year" type="number" maxLength="4" />
          <Checkbox radio label="Boy" name="gender" onChange={() => this.setState({ gender: "male" })} />
          <Checkbox radio label="Girl" name="gender" onChange={() => this.setState({ gender: "female" })} />
          <Form.Input name="area_code" type="number" maxLength="4" />
          <Form.Input name="phone_number_1" type="number" maxLength="4" />
          <Form.Input name="phone_number_2" type="number" maxLength="4" />
          <TextArea name= "biography" placeholder="Biography" autoHeight rows={2} />
          <TextArea name="interests" placeholder="Interests" autoHeight rows={2} />
          <Form.Input name="location" placeholder="Location" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default User;
