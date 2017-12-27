import React from 'react';

import { connect } from 'react-redux';
import { Search, Grid, Header } from 'semantic-ui-react';

import NewsSources from './NewsSources';


class NewsPage extends React.Component {

  render() {
    return (
      <div className="fulldisplay">
        <NewsSources />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

export default connect(mapStateToProps)(NewsPage);
