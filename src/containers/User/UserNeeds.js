import React from 'react';
import { connect } from 'react-redux';
import { Radar, Polar, HorizontalBar } from 'react-chartjs-2';
import { Grid, Button } from 'semantic-ui-react';

import Loading from '../../components/Loading';


class UserNeeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBarchart: true,
      selectedPolar: false,
      selectedRadar: false,
    }
  }

  renderBarChart = () => {
    const { needs } = this.props.personality.personalities;
    const needNames = needs.map((need) => need.name);
    const needScores = needs.map((need) => (need.raw_score * 100).toFixed(1));
    const needPercentile = needs.map((need) => (need.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,255,255, 0.2)','rgba(229, 253, 134, 0.5)', 'rgba(134, 212, 253, 0.47)', 'rgba(134, 140, 253, 0.47)', 'rgba(254, 200, 234, 0.5)', 'rgba(31, 35, 1, 0.15)']
    const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,255,255, 1)','rgba(229, 253, 134, 1)', 'rgba(134, 212, 253, 1)', 'rgba(134, 140, 253, 1)', 'rgba(254, 200, 234, 1.5)', 'rgba(31, 35, 1, 0.5)']

    const data = {
      labels: needNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: needScores,
        },
        {
          label: "Percentile",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: needPercentile,
        }
      ]
    }
    const options = {
      title: { display: true, text: 'Your Needs', fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }]
      },
      legend: { display: true, position: 'bottom' }
    }
    return <HorizontalBar data={data} options={options} />
  };

  renderPolarChart = () => {
    const { needs } = this.props.personality.personalities;
    const needNames = needs.map((need) => need.name);
    const needScores = needs.map((need) => (need.raw_score * 100).toFixed(1));
    const needPercentile = needs.map((need) => (need.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,255,255, 0.2)','rgba(229, 253, 134, 0.5)', 'rgba(134, 212, 253, 0.47)', 'rgba(134, 140, 253, 0.47)', 'rgba(254, 200, 234, 0.5)', 'rgba(31, 35, 1, 0.15)']
    const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,255,255, 1)','rgba(229, 253, 134, 1)', 'rgba(134, 212, 253, 1)', 'rgba(134, 140, 253, 1)', 'rgba(254, 200, 234, 1)', 'rgba(31, 35, 1, 1)']

    const data = {
      labels: needNames,
      datasets: [
        {
          data: needScores,
          backgroundColor: color,
          label: 'Scores'
        },
        {
          data: needPercentile,
          backgroundColor: borderColor,
          label: 'Percentile'
        }
      ]
    }
    const options = {
      responsive: true,
      legend: { position: 'bottom' },
      title: { display: true, text: 'Your Needs', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Polar data={data} options={options} />
  }

  renderRadarChart = () => {
    const { needs } = this.props.personality.personalities;
    const needNames = needs.map((need) => need.name);
    const needScores = needs.map((need) => (need.raw_score * 100).toFixed(1));
    const needPercentile = needs.map((need) => (need.percentile * 100).toFixed(1));

    const data = {
      labels: needNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: needScores
        },
        {
          label: "Percentile",
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: needPercentile
        }
      ]
    };
    const options = {
      responsive: true,
      legend: { position: 'bottom' },
      title: { display: true, text: 'Your Needs', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Radar data={data} options={options} />
  }

  render() {
    if (!this.props.personality.personalities.needs) { return <Loading /> }

    const { selectedBarchart, selectedPolar, selectedRadar } = this.state;

    return (
      <Grid>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          {selectedBarchart ? this.renderBarChart() : null}
          {selectedPolar ? this.renderPolarChart() : null}
          {selectedRadar ? this.renderRadarChart() : null}
          <br /><br />
          <Button.Group>
          <Button color="red" onClick={() => this.setState({ selectedPolar: false, selectedBarchart: true, selectedRadar: false })}>Bar Chart</Button>
          <Button.Or />
          <Button color="blue" onClick={() => this.setState({ selectedPolar: true, selectedBarchart: false, selectedRadar: false })}>Polar Chart</Button>
          <Button.Or />
          <Button color="teal" onClick={() => this.setState({ selectedPolar: false, selectedBarchart: false, selectedRadar: true })}>Radar Chart</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personality: state.personality
  }
}

export default connect(mapStateToProps)(UserNeeds);
