import React from 'react';
import { connect } from 'react-redux';
import ActionCable from 'actioncable';
import moment from 'moment';
import { Grid, Form, Segment } from "semantic-ui-react";
import { Bar } from 'react-chartjs-2';

import { getAllMessages, sendMessage } from '../../actions/chatActions';
import { createUserTones } from '../../actions/tonesActions';
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
    this.props.createUserTones();
    this.timer = setInterval(() => this.props.getAllMessages().then(this.setState({ chats: [] })), 10000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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

  renderChart = () => {
    const { tones } = this.props.tones;
    const labels = ["Anger", "Fear", "Joy", "Sadness", "Analytical", "Confident", "Tentative"];
    let newArray = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < labels.length; i++) {
      tones.document_tone.tones.forEach(tone => {
        if (labels[i] === tone.tone_name) {
          newArray[i] = tone.score
        }
      })
    }

    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)','rgb(204, 153, 255)', 'rgb(0, 102, 255)']
    const borderColor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgb(204, 153, 255, 1)', 'rgb(0, 102, 255, 1)']

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Percentage",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: newArray,
        }
      ]
    }
    const options = {
      title: { display: true, text: 'Your Current Messages Tone', fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0 } }]
      },
      legend: { display: true, position: 'bottom' }
    }
    return <Bar data={data} options={options} />
  };

  render() {
    if (!this.props.chat.messages || !this.props.user.currentUser.user) { return <Loading /> }

    return (
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={8}>
          <h4 align="center">{this.props.user.currentUser.user.username}, you have {this.props.chat.messages.filter(message => message.username === this.props.user.currentUser.user.username).length} active messages.</h4>
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
            {this.state.chats.map((message, index) => {
              return (
                (this.props.user.currentUser.user.username === message.username)
                ?
                (<Segment key={index} align="right"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br /><div style={{color:"blue"}}>{message.content}</div></Segment>)
                :
                (<Segment key={index} align="left"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br />{message.content}</Segment>)
              )
           }).reverse()}
           {this.props.chat.messages.map((message, index) => {
              return (
                (this.props.user.currentUser.user.username === message.username)
                ?
                (<Segment key={index} align="right"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br /><div style={{color:"blue"}}>{message.content}</div></Segment>)
                :
                (<Segment key={index} align="left"><strong>{`${message.username} `}</strong>{`[${message.time}]: `}<br />{message.content}</Segment>)
              )
            }).reverse()}
          </div>
        </Grid.Column>
        <Grid.Column width={6}>
          <br /><br />
          {this.props.tones.tones.document_tone ? this.renderChart() : null}
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    chat: state.chat,
    tones: state.tones,
  }
}

export default connect(mapStateToProps, { getAllMessages, sendMessage, createUserTones })(Chat);
