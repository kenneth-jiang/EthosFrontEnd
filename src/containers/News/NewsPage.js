import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NewsSources from './NewsSources';
import NewsSearch from './NewsSearch';
import NewsResults from './NewsResults';

import { Segment, Grid } from 'semantic-ui-react'

class NewsPage extends React.Component {
  renderNewsPage = () => {
    return (
      <div>
        <Segment align="center">
          <NewsSearch />
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
    const { match } = this.props;
    return (
      <div className="fulldisplay">
        <Switch>
          <Route exact path={match.url} component={this.renderNewsPage} />
          <Route exact path={`${match.url}/sources`} component={NewsSources} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

export default withRouter(connect(mapStateToProps)(NewsPage));
