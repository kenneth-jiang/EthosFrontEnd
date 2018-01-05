import React from 'react';
import { connect } from 'react-redux';
import { Bar, Radar, Polar, HorizontalBar } from 'react-chartjs-2';
import { Grid, Button } from 'semantic-ui-react';

import Loading from '../../components/Loading';


class UserPersonality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBarChart: true,
      selectedHorizontalChart: false,
      selectedPolarChart: false,
      selectedRadarChart: false,
      getTraits: false,
      trait: "",
      selectedTraitBarChart: true,
      selectedTraitHorizontalChart: false,
      selectedTraitPolarChart: false,
      selectedTraitRadarChart: false,
    }
  }

  renderHorizontalChart = () => {
    const { personality } = this.props.personality.personalities;
    const personalityNames = personality.map((personality) => personality.name);
    const personalityScores = personality.map((personality) => (personality.raw_score * 100).toFixed(1));
    const personalityPercentile = personality.map((personality) => (personality.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']
    const borderColor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']

    const data = {
      labels: personalityNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityScores,
        },
        {
          label: "Percentile",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityPercentile,
        }
      ]
    }
    const options = {
      title: { display: true, text: 'Your Personality', fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }]
      },
      legend: { display: true, position: 'right' }
    }
    return <HorizontalBar data={data} options={options} />
  };

  renderTraitHorizontalChart = (trait) => {
    const { personality } = this.props.personality.personalities;
    const filteredPersonality = personality.filter((personality) => personality.name === trait);
    const personalityTraitNames = filteredPersonality.map((personality) => personality.children.map((child) => child.name))[0];
    const personalityTraitScores = filteredPersonality.map((personality) => personality.children.map((child) => (child.raw_score * 100).toFixed(1)))[0];
    const personalityTraitPercentile = filteredPersonality.map((personality) => personality.children.map((child) => (child.percentile * 100).toFixed(1)))[0];
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,255,255, 0.2)','rgba(229, 253, 134, 0.5)', 'rgba(134, 212, 253, 0.47)', 'rgba(134, 140, 253, 0.47)', 'rgba(254, 200, 234, 0.5)', 'rgba(31, 35, 1, 0.15)']
    const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,255,255, 1)','rgba(229, 253, 134, 1)', 'rgba(134, 212, 253, 1)', 'rgba(134, 140, 253, 1)', 'rgba(254, 200, 234, 1.5)', 'rgba(31, 35, 1, 0.5)']

    const data = {
      labels: personalityTraitNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityTraitScores,
        },
        {
          label: "Percentile",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityTraitPercentile,
        }
      ]
    }
    const options = {
      title: { display: true, text: trait, fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }]
      },
      legend: { display: true, position: 'right' }
    }
    return <HorizontalBar data={data} options={options} />
  };

  renderBarChart = () => {
    const { personality } = this.props.personality.personalities;
    const personalityNames = personality.map((personality) => personality.name);
    const personalityScores = personality.map((personality) => (personality.raw_score * 100).toFixed(1));
    const personalityPercentile = personality.map((personality) => (personality.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']
    const borderColor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']

    const data = {
      labels: personalityNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityScores,
        },
        {
          label: "Percentile",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityPercentile,
        }
      ]
    }
    const options = {
      title: { display: true, text: 'Your Personality', fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }]
      },
      legend: { display: true, position: 'right' }
    }
    return <Bar data={data} options={options} />
  };

  renderTraitBarChart = (trait) => {
    const { personality } = this.props.personality.personalities;
    const filteredPersonality = personality.filter((personality) => personality.name === trait);
    const personalityTraitNames = filteredPersonality.map((personality) => personality.children.map((child) => child.name))[0];
    const personalityTraitScores = filteredPersonality.map((personality) => personality.children.map((child) => (child.raw_score * 100).toFixed(1)))[0];
    const personalityTraitPercentile = filteredPersonality.map((personality) => personality.children.map((child) => (child.percentile * 100).toFixed(1)))[0];
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,255,255, 0.2)','rgba(229, 253, 134, 0.5)', 'rgba(134, 212, 253, 0.47)', 'rgba(134, 140, 253, 0.47)', 'rgba(254, 200, 234, 0.5)', 'rgba(31, 35, 1, 0.15)']
    const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,255,255, 1)','rgba(229, 253, 134, 1)', 'rgba(134, 212, 253, 1)', 'rgba(134, 140, 253, 1)', 'rgba(254, 200, 234, 1.5)', 'rgba(31, 35, 1, 0.5)']

    const data = {
      labels: personalityTraitNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityTraitScores,
        },
        {
          label: "Percentile",
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth: 1,
          hoverBackgroundColor: color,
          hoverBorderColor: color,
          data: personalityTraitPercentile,
        }
      ]
    }
    const options = {
      title: { display: true, text: trait, fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0, max: 100 } }]
      },
      legend: { display: true, position: 'right' }
    }
    return <Bar data={data} options={options} />
  };

  renderPolarChart = () => {
    const { personality } = this.props.personality.personalities;
    const personalityNames = personality.map((personality) => personality.name);
    const personalityScores = personality.map((personality) => (personality.raw_score * 100).toFixed(1));
    const personalityPercentile = personality.map((personality) => (personality.percentile * 100).toFixed(1));
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,255,255, 0.2)','rgba(229, 253, 134, 0.5)', 'rgba(134, 212, 253, 0.47)', 'rgba(134, 140, 253, 0.47)', 'rgba(254, 200, 234, 0.5)', 'rgba(31, 35, 1, 0.15)']
    const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,255,255, 1)','rgba(229, 253, 134, 1)', 'rgba(134, 212, 253, 1)', 'rgba(134, 140, 253, 1)', 'rgba(254, 200, 234, 1.5)', 'rgba(31, 35, 1, 0.5)']

    const data = {
      labels: personalityNames,
      datasets: [
        {
          data: personalityScores,
          backgroundColor: color,
          label: 'Scores'
        },
        {
          data: personalityPercentile,
          backgroundColor: borderColor,
          label: 'Percentile'
        }
      ]
    }
    const options = {
      responsive: true,
      legend: { position: 'right' },
      title: { display: true, text: 'Your Personality', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Polar data={data} options={options} />
  }

  renderTraitPolarChart = (trait) => {
    const { personality } = this.props.personality.personalities;
    const filteredPersonality = personality.filter((personality) => personality.name === trait);
    const personalityTraitNames = filteredPersonality.map((personality) => personality.children.map((child) => child.name))[0];
    const personalityTraitScores = filteredPersonality.map((personality) => personality.children.map((child) => (child.raw_score * 100).toFixed(1)))[0];
    const personalityTraitPercentile = filteredPersonality.map((personality) => personality.children.map((child) => (child.percentile * 100).toFixed(1)))[0];
    const color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,255,255, 0.2)','rgba(229, 253, 134, 0.5)', 'rgba(134, 212, 253, 0.47)', 'rgba(134, 140, 253, 0.47)', 'rgba(254, 200, 234, 0.5)', 'rgba(31, 35, 1, 0.15)']
    const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,255,255, 1)','rgba(229, 253, 134, 1)', 'rgba(134, 212, 253, 1)', 'rgba(134, 140, 253, 1)', 'rgba(254, 200, 234, 1.5)', 'rgba(31, 35, 1, 0.5)']
    const data = {
      labels: personalityTraitNames,
      datasets: [
        {
          data: personalityTraitScores,
          backgroundColor: color,
          label: 'Scores'
        },
        {
          data: personalityTraitPercentile,
          backgroundColor: borderColor,
          label: 'Percentile'
        }
      ]
    }
    const options = {
      responsive: true,
      legend: { position: 'right' },
      title: { display: true, text: 'Your Personality', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Polar data={data} options={options} />
  }

  renderRadarChart = () => {
    const { personality } = this.props.personality.personalities;
    const personalityNames = personality.map((personality) => personality.name);
    const personalityScores = personality.map((personality) => (personality.raw_score * 100).toFixed(1));
    const personalityPercentile = personality.map((personality) => (personality.percentile * 100).toFixed(1));

    const data = {
      labels: personalityNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: personalityScores
        },
        {
          label: "Percentile",
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: personalityPercentile
        }
      ]
    };
    const options = {
      responsive: true,
      legend: { position: 'right' },
      title: { display: true, text: 'Your Personality', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Radar data={data} options={options} />
  }

  renderTraitRadarChart = (trait) => {
    const { personality } = this.props.personality.personalities;
    const filteredPersonality = personality.filter((personality) => personality.name === trait);
    const personalityTraitNames = filteredPersonality.map((personality) => personality.children.map((child) => child.name))[0];
    const personalityTraitScores = filteredPersonality.map((personality) => personality.children.map((child) => (child.raw_score * 100).toFixed(1)))[0];
    const personalityTraitPercentile = filteredPersonality.map((personality) => personality.children.map((child) => (child.percentile * 100).toFixed(1)))[0];

    const data = {
      labels: personalityTraitNames,
      datasets: [
        {
          label: "Scores",
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: personalityTraitScores
        },
        {
          label: "Percentile",
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: personalityTraitPercentile
        }
      ]
    };
    const options = {
      responsive: true,
      legend: { position: 'right' },
      title: { display: true, text: 'Your Personality', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Radar data={data} options={options} />
  }

  render() {
    if (!this.props.personality.personalities.personality) { return <Loading /> }
    const { selectedHorizontalChart, selectedPolarChart, selectedRadarChart, selectedBarChart, getTraits, selectedTraitHorizontalChart, selectedTraitPolarChart, selectedTraitRadarChart, selectedTraitBarChart, trait } = this.state;

    return (
      <Grid>
        <Grid.Column width={7}>
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
        <Grid.Column width={2}>
          <br /><br /><br />
          <Button.Group vertical>
            <Button color="red" onClick={() => this.setState({ trait: "Openness", getTraits: true })}>Openness</Button>
            <Button color="blue" onClick={() => this.setState({ trait: "Conscientiousness", getTraits: true })}>Conscientiousness</Button>
            <Button color="green" onClick={() => this.setState({ trait: "Extraversion", getTraits: true })}>Extraversion</Button>
            <Button color="yellow" onClick={() => this.setState({ trait: "Agreeableness", getTraits: true })}>Agreeableness</Button>
            <Button color="pink" onClick={() => this.setState({ trait: "Emotional range", getTraits: true })}>Emotional Range</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column width={7}>
          {getTraits
            ?
            <div>
              {selectedTraitBarChart ? this.renderTraitBarChart(trait) : null}
              {selectedTraitHorizontalChart ? this.renderTraitHorizontalChart(trait) : null}
              {selectedTraitPolarChart ? this.renderTraitPolarChart(trait) : null}
              {selectedTraitRadarChart ? this.renderTraitRadarChart(trait) : null}
              <br /><br />
              <Button.Group>
              <Button color="yellow" onClick={() => this.setState({ selectedTraitBarChart: true, selectedTraitPolarChart: false, selectedTraitHorizontalChart: false, selectedTraitRadarChart: false })}>Bar Chart</Button>
              <Button.Or />
              <Button color="red" onClick={() => this.setState({ selectedTraitBarChart: false, selectedTraitPolarChart: false, selectedTraitHorizontalChart: true, selectedTraitRadarChart: false })}>Horizontal Chart</Button>
              <Button.Or />
              <Button color="blue" onClick={() => this.setState({ selectedTraitBarChart: false, selectedTraitPolarChart: true, selectedTraitHorizontalChart: false, selectedTraitRadarChart: false })}>Polar Chart</Button>
              <Button.Or />
              <Button color="teal" onClick={() => this.setState({ selectedTraitBarChart: false, selectedTraitPolarChart: false, selectedTraitHorizontalChart: false, selectedTraitRadarChart: true })}>Radar Chart</Button>
              </Button.Group>
            </div>
            :
            null
          }
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

export default connect(mapStateToProps)(UserPersonality);
