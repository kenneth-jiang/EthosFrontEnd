import React from 'react';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuthentication = (ComposedComponent) => {
  return class Authentication extends React.Component {
    render() {
      return (
        localStorage.getItem('token') ?
          <ComposedComponent {...this.props} />
        :
          <Redirect to="welcome" />
      )
    }
  }
}

export default requireAuthentication;
