import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

import UserShow from './UserShow';
import Loading from '../../components/Loading';


class UserPage extends React.Component {
  render() {
    if (this.props.user.currentUser.user === undefined ) {
      return <Loading />
    }

    return (
      <Switch>
        <Route path="/user/:id" component={UserShow} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(UserPage);
        // <Route exact path="/user/all" component={UserAll} />
// <Route exact path="/user/:id/" component={UserShow} />
// <Route exact path="/user/index" component={UserIndex} />
