import React from 'react';
import { connect } from 'react-redux';
import { Bar, Radar, Polar, HorizontalBar } from 'react-chartjs-2';
import { Grid, Button } from 'semantic-ui-react';

import Loading from '../../components/Loading';


class UserValues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBarChart: false,
      selectedHorizontalChart: true,
      selectedPolarChart: false,
      selectedRadarChart: false,
    }
  }

  renderBarChart = () => {
    const { values } = this.props.personality.personalities;
    const valueNames = values.map((value) => value.name);
    const valueScores = values.map((value) => (value.raw_score * 100).toFixed(1));
    const valuePercentile = values.map((value) => (value.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']
    const borderColor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']

    const data = {
      labels: valueNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: valueScores,
        },
        {
          label: "Percentile",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: valuePercentile,
        }
      ]
    }
    const options = {
      title: { display: true, text: 'Your Values', fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }]
      },
      legend: { display: true, position: 'right' }
    }
    return <Bar data={data} options={options} />
  };

  renderHorizontalChart = () => {
    const { values } = this.props.personality.personalities;
    const valueNames = values.map((value) => value.name);
    const valueScores = values.map((value) => (value.raw_score * 100).toFixed(1));
    const valuePercentile = values.map((value) => (value.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']
    const borderColor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']

    const data = {
      labels: valueNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: valueScores,
        },
        {
          label: "Percentile",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: valuePercentile,
        }
      ]
    }
    const options = {
      title: { display: true, text: 'Your Values', fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }]
      },
      legend: { display: true, position: 'right' }
    }
    return <HorizontalBar data={data} options={options} />
  };

  renderPolarChart = () => {
    const { values } = this.props.personality.personalities;
    const valueNames = values.map((value) => value.name);
    const valueScores = values.map((value) => (value.raw_score * 100).toFixed(1));
    const valuePercentile = values.map((value) => (value.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']
    const borderColor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']

    const data = {
      labels: valueNames,
      datasets: [
        {
          data: valueScores,
          backgroundColor: color,
          label: 'Scores'
        },
        {
          data: valuePercentile,
          backgroundColor: borderColor,
          label: 'Percentile'
        }
      ]
    }
    const options = {
      responsive: true,
      legend: { position: 'right' },
      title: { display: true, text: 'Your Values', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Polar data={data} options={options} />
  }

  renderRadarChart = () => {
    const { values } = this.props.personality.personalities;
    const valueNames = values.map((value) => value.name);
    const valueScores = values.map((value) => (value.raw_score * 100).toFixed(1));
    const valuePercentile = values.map((value) => (value.percentile * 100).toFixed(1));

    const data = {
      labels: valueNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: valueScores
        },
        {
          label: "Percentile",
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: valuePercentile
        }
      ]
    };
    const options = {
      responsive: true,
      legend: { position: 'right' },
      title: { display: true, text: 'Your Values', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Radar data={data} options={options} />
  }

  render() {
    if (!this.props.personality.personalities.values) { return <Loading /> }

    const { selectedBarChart, selectedHorizontalChart, selectedPolarChart, selectedRadarChart } = this.state;

    return (
      <Grid>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          {selectedBarChart ? this.renderBarChart() : null}
          {selectedHorizontalChart ? this.renderHorizontalChart() : null}
          {selectedPolarChart ? this.renderPolarChart() : null}
          {selectedRadarChart ? this.renderRadarChart() : null}
          <br /><br />
          <Button.Group>
          <Button color="yellow" onClick={() => this.setState({ selectedBarChart: true, selectedPolarChart: false, selectedHorizontalChart: false, selectedRadarChart: false })}>Bar Chart</Button>
          <Button.Or />
          <Button color="red" onClick={() => this.setState({ selectedBarChart: false, selectedPolarChart: false, selectedHorizontalChart: true, selectedRadarChart: false })}>Horizontal Chart</Button>
          <Button.Or />
          <Button color="blue" onClick={() => this.setState({ selectedBarChart: false, selectedPolarChart: true, selectedHorizontalChart: false, selectedRadarChart: false })}>Polar Chart</Button>
          <Button.Or />
          <Button color="teal" onClick={() => this.setState({ selectedBarChart: false, selectedPolarChart: false, selectedHorizontalChart: false, selectedRadarChart: true })}>Radar Chart</Button>
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

export default connect(mapStateToProps)(UserValues);
