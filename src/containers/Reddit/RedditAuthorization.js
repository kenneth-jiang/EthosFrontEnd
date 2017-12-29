import React from 'react';
import { connect } from 'react-redux';
import { redditAccessToken } from '../../actions/redditActions';
import Loading from '../../components/Loading';

class RedditAuthorization extends React.Component {
  componentDidMount() {
    this.props.redditAccessToken(this.props.history, this.props.location)
  }

  render() {
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

export default connect(null, { redditAccessToken })(RedditAuthorization);
