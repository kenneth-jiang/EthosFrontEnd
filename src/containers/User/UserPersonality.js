import React from 'react';
import { connect } from 'react-redux';
import { Bar, Radar, Polar, HorizontalBar } from 'react-chartjs-2';
import { Grid, Button } from 'semantic-ui-react';

import Loading from '../../components/Loading';


class UserPersonality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBarchart: true,
      selectedPolar: false,
      selectedRadar: false,
      selectedNormalBarchart: false,
      getTraits: false,
      trait: "",
      selectedTraitBarchart: true,
      selectedTraitPolar: false,
      selectedTraitRadar: false,
      selectedTraitNormalBarchart: false,
    }
  }

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
      legend: { display: true, position: 'bottom' }
    }
    return <HorizontalBar data={data} options={options} />
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
      legend: { display: true, position: 'bottom' }
    }
    return <HorizontalBar data={data} options={options} />
  };

  renderNormalBarChart = () => {
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
      legend: { display: true, position: 'bottom' }
    }
    return <Bar data={data} options={options} />
  };

  renderNormalTraitBarChart = (trait) => {
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
      legend: { display: true, position: 'bottom' }
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
      legend: { position: 'bottom' },
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
      legend: { position: 'bottom' },
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
      legend: { position: 'bottom' },
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
      legend: { position: 'bottom' },
      title: { display: true, text: 'Your Personality', fontSize: 30 },
      scale: { ticks: {beginAtZero: true, max: 100}, reverse: false },
      animation: { animateRotate: true, animateScale: true }
    }
    return <Radar data={data} options={options} />
  }

  render() {
    if (!this.props.personality.personalities.personality) { return <Loading /> }

    const { selectedBarchart, selectedPolar, selectedRadar, selectedNormalBarchart, getTraits, selectedTraitBarchart, selectedTraitPolar, selectedTraitRadar, selectedTraitNormalBarchart, trait } = this.state;

    return (
      <Grid>
        <Grid.Column width={7}>
          {selectedBarchart ? this.renderBarChart() : null}
          {selectedPolar ? this.renderPolarChart() : null}
          {selectedRadar ? this.renderRadarChart() : null}
          {selectedNormalBarchart ? this.renderNormalBarChart() : null}
          <br />
          <Button.Group>
          <Button color="red" onClick={() => this.setState({ selectedNormalBarchart: false, selectedPolar: false, selectedBarchart: true, selectedRadar: false })}>Horizontal Bar Chart</Button>
          <Button.Or />
          <Button color="blue" onClick={() => this.setState({ selectedNormalBarchart: false, selectedPolar: true, selectedBarchart: false, selectedRadar: false })}>Polar Chart</Button>
          <Button.Or />
          <Button color="teal" onClick={() => this.setState({ selectedNormalBarchart: false, selectedPolar: false, selectedBarchart: false, selectedRadar: true })}>Radar Chart</Button>
          <Button.Or />
          <Button color="yellow" onClick={() => this.setState({ selectedNormalBarchart: true, selectedPolar: false, selectedBarchart: false, selectedRadar: false })}>Bar Chart</Button>
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
              {selectedTraitBarchart ? this.renderTraitBarChart(trait) : null}
              {selectedTraitPolar ? this.renderTraitPolarChart(trait) : null}
              {selectedTraitRadar ? this.renderTraitRadarChart(trait) : null}
              {selectedTraitNormalBarchart ? this.renderNormalTraitBarChart(trait) : null}
              <br /><br />
              <Button.Group>
              <Button color="red" onClick={() => this.setState({ selectedNormalTraitBarchart: false, selectedTraitPolar: false, selectedTraitBarchart: true, selectedTraitRadar: false })}>Horizontal Bar Chart</Button>
              <Button.Or />
              <Button color="blue" onClick={() => this.setState({ selectedNormalTraitBarchart: false, selectedTraitPolar: true, selectedTraitBarchart: false, selectedTraitRadar: false })}>Polar Chart</Button>
              <Button.Or />
              <Button color="teal" onClick={() => this.setState({ selectedNormalTraitBarchart: false, selectedTraitPolar: false, selectedTraitBarchart: false, selectedTraitRadar: true })}>Radar Chart</Button>
              <Button.Or />
              <Button color="yellow" onClick={() => this.setState({ selectedNormalTraitBarchart: true, selectedTraitPolar: false, selectedTraitBarchart: false, selectedTraitRadar: false })}>Bar Chart</Button>
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

// import Sunburst from 'react-sunburst-d3-v4';
// {selectedSunburst
//   ?
//   <Grid>
//     <Grid.Column width={3}>
//     </Grid.Column>
//     <Grid.Column width={10}>
//       {this.renderSunburstChart()}
//       <Button.Group>
//       <Button color="yellow" onClick={() => this.setState({ selectedSunburst: true, selectedPolar: false, selectedBarchart: false, selectedRadar: false })}>Sunburst Chart</Button>
//       <Button.Or />
//       <Button color="red" onClick={() => this.setState({ selectedSunburst: false, selectedPolar: false, selectedBarchart: true, selectedRadar: false })}>Bar Chart</Button>
//       <Button.Or />
//       <Button color="blue" onClick={() => this.setState({ selectedSunburst: false, selectedPolar: true, selectedBarchart: false, selectedRadar: false })}>Polar Chart</Button>
//       <Button.Or />
//       <Button color="teal" onClick={() => this.setState({ selectedSunburst: false, selectedPolar: false, selectedBarchart: false, selectedRadar: true })}>Radar Chart</Button>
//       </Button.Group>
//     </Grid.Column>
//     <Grid.Column width={2}>
//       Trait: {this.state.name} <br />
//       Score: {this.state.size}
//     </Grid.Column>
//     <Grid.Column width={1}>
//     </Grid.Column>
//   </Grid>
// :
// }

// handleSelect = (event) => {
//   console.log(event)
//   this.setState({ name: event.data.name, size: event.data.size || event.value.toFixed(1) })
// }
//
// renderSunburstChart = () => {
//   const data = {name: "All Traits", children: this.props.personality.personalities.personality.map((personality) => {
//     return {name: personality.name, children: personality.children.map((child) => {
//       return {name: child.name, size: (child.raw_score * 100).toFixed(1)}
//     })}
//   })}
//
//   return (
//     <div align="center">
//       <h2>Your Personality</h2>
//       <Sunburst
//         data={data}
//         onSelect={this.handleSelect}
//         scale="linear"
//         tooltipContent={ <div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" /> }
//         tooltip
//         tooltipPosition="center"
//         keyId="anagraph"
//         width="600"
//         height="500"
//       />
//     </div>
//   )
// }
// <Button color="yellow" onClick={() => this.setState({ selectedSunburst: true, selectedPolar: false, selectedBarchart: false, selectedRadar: false })}>Sunburst Chart</Button>
// <Button.Or />
