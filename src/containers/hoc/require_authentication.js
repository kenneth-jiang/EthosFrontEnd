import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    }
  }

  return Authentication;
}
