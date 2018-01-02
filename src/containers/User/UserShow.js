import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Grid, Image, Input } from 'semantic-ui-react';
import UserEdit from './UserEdit';
import UserPreferences from './UserPreferences';
import UserValues from './UserValues';
import UserNeeds from './UserNeeds';
import UserPersonality from './UserPersonality';
import Loading from '../../components/Loading';
import { createUserPersonality, showUserPersonality } from '../../actions/personalityActions';
import { updateUserInfo } from '../../actions/userActions';

// import data from './data2'

class UserShow extends React.Component {
  constructor() {
    super();
    this.state = {
      profile_pic: "",
      updatePictureInput: false,
    }
  }

  componentDidMount() {
    this.props.showUserPersonality();
  }

  handleChange = (event) => {
    this.setState({ profile_pic: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateUserInfo(this.state)
    this.setState({ updatePictureInput: !this.state.updatePictureInput }, () => {
      this.setState({ profile_pic: "" })
    })
  }

  renderUserProfile = () => {
    const { username, first_name, last_name, email, phone, birthday, location, gender, interests, about, profile_pic, status } = this.props.user.currentUser.user;
    return (
      <Grid columns="equal">
        <Grid.Column>
        {`${username}'s Profile Page!`} <br /><br />
          First Name: {first_name} <br />
          Last Name: {last_name} <br />
          E-mail: {email} <br />
          Phone: {phone} <br />
          Birthday: {birthday} <br />
          Location: {location} <br />
          Gender: {gender} <br />
          Interests: {interests} <br />
          About: {about} <br />
        </Grid.Column>
        <Grid.Column align="right">
        {status}
        <Image onClick={() => this.setState({ updatePictureInput: !this.state.updatePictureInput })} size="small" circular src={profile_pic || "https://success.salesforce.com/resource/tdxlib/img/default-user.png"} />
        {this.state.updatePictureInput ?
          <Form onSubmit={this.handleSubmit}>
            <Form.Input placeholder="Update profile picture" value={this.state.profile_pic} onChange={this.handleChange} />
            <Button type="submit">Submit</Button>
          </Form>
        :
          null
        }
        <Input placeholder="Update your status"/> <br />
        <Button onClick={() => this.props.createUserPersonality()}>User Personality</Button>
        </Grid.Column>
        </Grid>
    )
  }

  render() {
    if (!this.props.personality.personalities) { return <Loading /> }
    return (
        <Switch>
          <Route exact path="/user/:id/edit" component={UserEdit} />
          <Route exact path="/user/:id/preferences" component={UserPreferences} />
          <Route exact path="/user/:id/values" component={UserValues} />
          <Route exact path="/user/:id/needs" component={UserNeeds} />
          <Route exact path="/user/:id/personality" component={UserPersonality} />
          <Route exact path="/user/:id" render={() => this.renderUserProfile()} />
        </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    personality: state.personality
  }
}

export default connect(mapStateToProps, { createUserPersonality, showUserPersonality, updateUserInfo })(UserShow);

// import Sunburst from 'react-sunburst-d3-v4';
// <Sunburst
//   onMouseEnter={this.handleClick}
//   data={data}
//   scale="linear"
//   tooltipContent={ <div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" /> }
//   tooltip
//   tooltipPosition="center"
//   keyId="anagraph"
//   width="480"
//   height="400"
// />

// <Route exact path="/user/:id/favorites" component={UserFavorites} />
// <Route exact path="/user/:id/personality" component={UserPersonality} />
// <Route exact path="/user/:id/needs" component={UserNeeds} />
// <Route exact path="/user/:id/values" component={UserValues} />
// <Route exact path="/user/:id/preferences" component={UserPreferences} />
// <Route exact path="/user/:id/friends" component={UserFriends} />
// <Route exact path="/user/:id/edit" component={UserEdit} />
