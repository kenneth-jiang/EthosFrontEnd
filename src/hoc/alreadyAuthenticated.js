import React from 'react';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const alreadyAuthenticated = (ComposedComponent) => {
  return class Authentication extends React.Component {
    render() {
      return (
        localStorage.getItem('token') ?
          <Redirect to="/" />
        :
          <ComposedComponent {...this.props} />
      )
    }
  }
}

export default alreadyAuthenticated;
