import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';
import { createUserTones } from '../../actions/tonesActions';


class Tones extends React.Component {

  renderNormalBarChart = () => {
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
      title: { display: true, text: 'Current Messages Tone', fontSize: 30 },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true, min: 0 } }],
        xAxes: [{ ticks: { beginAtZero: true, min: 0 } }]
      },
      legend: { display: true, position: 'right' }
    }
    return <Bar data={data} options={options} />
  };

  render() {
    return (
      <div>
        <Button onClick={() => this.props.createUserTones()}>Get Tones</Button>
        {this.props.tones.tones.document_tone ? this.renderNormalBarChart() : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tones: state.tones,
  }
}
export default connect(mapStateToProps, { createUserTones })(Tones);
