import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPersonality } from '../actions/personality_actions';

import Chart from 'chart.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {};
  }

  componentDidMount() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [this.props.personalities.personality.insights.personality[0].name, this.props.personalities.personality.insights.personality[1].name, this.props.personalities.personality.insights.personality[2].name, this.props.personalities.personality.insights.personality[3].name, this.props.personalities.personality.insights.personality[4].name],
            datasets: [{
                label: '# of Votes',
                data: [this.props.personalities.personality.insights.personality[0].raw_score, this.props.personalities.personality.insights.personality[1].raw_score, this.props.personalities.personality.insights.personality[2].raw_score, this.props.personalities.personality.insights.personality[3].raw_score, this.props.personalities.personality.insights.personality[4].raw_score],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    return myChart;
  }


  render() {
    return (
      <div>
        <canvas id="myChart"></canvas>
        {this.props.personalities ? this.props.personalities.personality.insights.needs.map(need => <li>{need.trait_id}</li>) : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personalities: state.personality
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPersonality: fetchPersonality,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
