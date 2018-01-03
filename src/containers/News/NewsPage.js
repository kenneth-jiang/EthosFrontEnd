import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react'

import NewsSearch from './NewsSearch';
import NewsResults from './NewsResults';
import NewsSources from './NewsSources';


class NewsPage extends React.Component {
  renderNewsPage = () => {
    return (
      <div>
        <Segment className="fulldisplay" align="center">
          <NewsSearch history={this.props.history} />
        </Segment>
        {this.props.news.results ?
          <Grid width={10}>
            <NewsResults />
          </Grid>
        :
          null
        }
      </div>
    )
  }

  render() {
    return (
      <Switch>
        <Route exact path={'/news/sources'} component={NewsSources} />
        <Route exact path={'/news'} render={this.renderNewsPage} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

export default withRouter(connect(mapStateToProps)(NewsPage));
