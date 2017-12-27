import React from 'react';

import { connect } from 'react-redux';

import {  } from 'semantic-ui-react';


class FarooSearch extends React.Component {
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

export default connect(mapStateToProps)(FarooSearch);
