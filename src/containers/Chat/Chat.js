import React from 'react';
import { connect } from 'react-redux';
import ActionCable from 'actioncable';
import moment from 'moment';
import { Grid, Form, Button, Segment, Image, Item, Input } from "semantic-ui-react";

import { getAllMessages, sendMessage } from '../../actions/chatActions';
import Loading from '../../components/Loading';


class Chat extends React.Component {
  constructor(){
    super();
    this.state = {
      chats: [],
      message: ""
    }
    this.subscribeChannel();
  }

  componentDidMount() {
    this.props.getAllMessages();
  }

  subscribeChannel = () => {
    const cable = ActionCable.createConsumer("ws://localhost:3001/cable");
    cable.subscriptions.create({ channel: "RoomChannel" }, { received: data => this.addChat(data) });
  }

  addChat = (chat) => {
    this.setState({ chats: [...this.state.chats, { content: chat.content, username: chat.username, time: chat.time }] });
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value })
  }

  handleSubmit = (event) => {
    const { message } = this.state;
    const { username, id } = this.props.user.currentUser.user;
    event.preventDefault();
    this.setState({ message: "" })
    this.props.sendMessage(message, username, moment().format('HH:mm:ss'), id);
  }

  render() {
    if (!this.props.chat.messages || !this.props.user.currentUser.user) { return <Loading /> }
    const { message } = this.state;
    const { username, id } = this.props.user.currentUser.user;
    return (
      <Grid>
        <Grid.Column width={4} align="center">
          <br /><br /><br />
        </Grid.Column>
        <Grid.Column width={8}>
          <h4 align="center">Connected as: {username}</h4>
          <br />
          <Form align="center" onSubmit={this.handleSubmit}>
            <Form.Group>
            <Form.Input
              icon="terminal"
              iconPosition="left"
              action="Send"
              value={this.state.message}
              onChange={this.handleChange}
              width={16}
              />
            </Form.Group>
          </Form>
          <div style={{height:"70vh", maxHeight:"70vh", overflow: "auto"}}>
            {this.state.chats.map(message => {
              return (
                (this.props.user.currentUser.user.username === message.username)
                ?

                (<Segment align="right"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br /><div style={{color:"blue"}}>{message.content}</div></Segment>)
                :
                (<Segment align="left"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br />{message.content}</Segment>)
              )
           }).reverse()}
           {this.props.chat.messages.map((message) => {
              return (
                (this.props.user.currentUser.user.username === message.username)
                ?
                (<Segment align="right"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br /><div style={{color:"blue"}}>{message.content}</div></Segment>)
                :
                (<Segment align="left"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br />{message.content}</Segment>)
              )
            }).reverse()}
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    chat: state.chat,
  }
}

export default connect(mapStateToProps, { getAllMessages, sendMessage })(Chat);
