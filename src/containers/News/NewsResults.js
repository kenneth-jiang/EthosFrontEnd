import React from 'react';

import { connect } from 'react-redux';

import {  } from 'semantic-ui-react';


class NewsResults extends React.Component {
  render() {
    return (

    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

export default connect(mapStateToProps)(NewsResults);
