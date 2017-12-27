import React from 'react';

import { connect } from 'react-redux';

import {  } from 'semantic-ui-react';


class FarooResults extends React.Component {
  render() {
    return (

    )
  }
}

const mapStateToProps = (state) => {
  return {
    faroo: state.faroo,
  }
}

export default connect(mapStateToProps)(FarooResults);
