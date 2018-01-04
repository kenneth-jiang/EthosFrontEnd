import React from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Button, Grid, Image, Menu, Card } from 'semantic-ui-react';

import { createUserPersonality, showUserPersonality } from '../../actions/personalityActions';
import { updateUserInfo } from '../../actions/userActions';
import UserPersonality from './UserPersonality';
import UserValues from './UserValues';
import UserNeeds from './UserNeeds';
import UserPreferences from './UserPreferences';
import Loading from '../../components/Loading';


class UserShow extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "",
      profile_pic: "",
      updatePictureInput: false,
      status: "",
      renderPersonality: false,
      renderNeeds: false,
      renderValues: false,
      renderPreferences: false,
    }
  }

  componentDidMount() {
    this.props.showUserPersonality();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handlePictureSubmit = (event) => {
    event.preventDefault();
    this.props.updateUserInfo(this.state)
    this.setState({
      updatePictureInput: !this.state.updatePictureInput,
      profile_pic: "",
    })
  }

  handleStatusSubmit = (event) => {
    event.preventDefault();
    this.props.updateUserInfo({status: this.state.status});
    this.setState({ status: "" });
  }

  handlePersonality = (event) => {
    this.setState({ activeItem: "personality", renderPersonality: true, renderNeeds: false, renderValues: false, renderPreferences: false })
  }

  handleNeeds = (event) => {
    this.setState({ activeItem: "needs", renderPersonality: false, renderNeeds: true, renderValues: false, renderPreferences: false })
  }

  handleValues = (event) => {
    this.setState({ activeItem: "values", renderPersonality: false, renderNeeds: false, renderValues: true, renderPreferences: false })
  }

  handlePreferences = (event) => {
    this.setState({ activeItem: "preferences", renderPersonality: false, renderNeeds: false, renderValues: false, renderPreferences: true })
  }

  render() {
    if (!this.props.personality.personalities) { return <Loading /> }

    const { profile_pic, status } = this.props.user.currentUser.user;
    return (
      <div>
        <Grid columns="equal">
          <Grid.Column stretched width={12} align="right">
            <Segment>
              <Segment align="left">
                {status}
              </Segment>
              <Form onSubmit={this.handleStatusSubmit}>
                <Form.TextArea name="status" onChange={this.handleChange} value={this.state.status} placeholder='How are you feeling?' autoHeight rows={2} />
                <Form.Button type="submit">Submit</Form.Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment align="center">
              <Menu fluid vertical tabular='right'>
                {this.state.updatePictureInput ?
                  <Form onSubmit={this.handlePictureSubmit}>
                    <Form.Input name="profile_pic" placeholder="Update profile picture" value={this.state.profile_pic} onChange={this.handleChange} action={"Update"}/>
                  </Form>
                :
                  null
                }
                <Card align="center">
                  <Image onClick={() => this.setState({ updatePictureInput: !this.state.updatePictureInput })} size="small" rounded src={profile_pic || "https://success.salesforce.com/resource/tdxlib/img/default-user.png"} />
                  <Card.Content>
                    <Button size="tiny" onClick={() => this.props.createUserPersonality()}>Update Personality</Button>
                  </Card.Content>
                </Card>
                <Menu.Menu>
                  <Menu.Item name='personality' active={this.state.activeItem === 'personality'} onClick={this.handlePersonality}>
                    Personality
                  </Menu.Item>
                  <Menu.Item name='needs' active={this.state.activeItem === 'needs'} onClick={this.handleNeeds}>
                    Needs
                  </Menu.Item>
                  <Menu.Item name='values' active={this.state.activeItem === 'values'} onClick={this.handleValues}>
                    Values
                  </Menu.Item>
                  <Menu.Item name='preferences' active={this.state.activeItem === 'preferences'} onClick={this.handlePreferences}>
                    Preferences
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Segment>
          </Grid.Column>
        </Grid>
        {this.state.renderPersonality ? <Segment><UserPersonality /></Segment> : null}
        {this.state.renderNeeds ? <Segment><UserNeeds /></Segment> : null}
        {this.state.renderValues ? <Segment><UserValues /></Segment> : null}
        {this.state.renderPreferences ? <Segment><UserPreferences /></Segment> : null}
      </div>
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
