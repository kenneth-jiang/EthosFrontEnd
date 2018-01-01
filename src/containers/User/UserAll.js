import React from 'react';

import {Doughnut, Radar} from 'react-chartjs-2';
import data from './data3'

class UserAll extends React.Component {
  render() {
    return (
      <div>
        <Doughnut data={data} />
        <Radar data={data} />
      </div>
    )
  }
}

export default UserAll;
