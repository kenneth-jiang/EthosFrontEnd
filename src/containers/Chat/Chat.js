import React from 'react';
import { connect } from 'react-redux';
import ActionCable from 'actioncable';
import moment from 'moment';
import { Grid, Form, Segment, Button } from "semantic-ui-react";
import { Bar, HorizontalBar, Polar, Radar } from 'react-chartjs-2';

import { getAllMessages, sendMessage } from '../../actions/chatActions';
import { createUserTones } from '../../actions/tonesActions';
import Loading from '../../components/Loading';


class Chat extends React.Component {
  constructor(){
    super();
    this.state = {
      chats: [],
      message: "",
      selectedBarchart: false,
      selectedPolar: false,
      selectedRadar: false,
      selectedChart: true,
    }
    this.subscribeChannel();
  }

  componentDidMount() {
    this.props.getAllMessages();
    this.props.createUserTones();
    this.chatTimer = setInterval(() => this.props.getAllMessages().then(this.setState({ chats: [] })), 10000)
    this.toneTimer = setInterval(() => this.props.createUserTones(), 10000)
  }

  componentWillUnmount() {
    clearInterval(this.chatTimer);
    clearInterval(this.toneTimer)
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

  renderBarChart = () => {
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
    return <HorizontalBar data={data} options={options} />
  };

  renderPolarChart = () => {
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

    const data = {
      labels: labels,
      datasets: [
        {
          data: newArray,
          backgroundColor: color,
          label: "Percentage"
        }
      ]
    }
    const options = {
      responsive: true,
      legend: { position: 'bottom' },
      title: { display: true, text: 'Your Current Messages Tone', fontSize: 30 },
      scale: { ticks: {beginAtZero: true}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Polar data={data} options={options} />
  }

  renderRadarChart = () => {
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

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Percentage",
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: newArray
        }
      ]
    }
    const options = {
      responsive: true,
      legend: { position: 'bottom' },
      title: { display: true, text: 'Your Current Messages Tone', fontSize: 30 },
      scale: { ticks: {beginAtZero: true}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Radar data={data} options={options} />
  }

  render() {
    if (!this.props.chat.messages || !this.props.user.currentUser.user) { return <Loading /> }
    const { selectedChart, selectedBarchart, selectedPolar, selectedRadar } = this.state;
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
          {this.props.tones.tones.document_tone ?
            <div>
              <br /><br />
              {selectedBarchart ? this.renderBarChart() : null}
              {selectedPolar ? this.renderPolarChart() : null}
              {selectedRadar ? this.renderRadarChart() : null}
              {selectedChart ? this.renderChart() : null}
              <br /><br />
              <Button.Group>
              <Button color="yellow" onClick={() => this.setState({ selectedChart: true, selectedPolar: false, selectedBarchart: false, selectedRadar: false })}>Bar Chart</Button>
              <Button.Or />
              <Button color="red" onClick={() => this.setState({ selectedChart: false, selectedPolar: false, selectedBarchart: true, selectedRadar: false })}>Horizontal Chart</Button>
              <Button.Or />
              <Button color="blue" onClick={() => this.setState({ selectedChart: false, selectedPolar: true, selectedBarchart: false, selectedRadar: false })}>Polar Chart</Button>
              <Button.Or />
              <Button color="teal" onClick={() => this.setState({ selectedChart: false, selectedPolar: false, selectedBarchart: false, selectedRadar: true })}>Radar Chart</Button>
              </Button.Group>
            </div>
          :
            null
          }
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
