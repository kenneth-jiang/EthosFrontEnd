import React from 'react';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';

import WolframSearch from './WolframSearch';
import WolframResults from './WolframResults';


class WolframPage extends React.Component {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={10} align="center">
            <Image size="medium" src="http://www.pvhc.net/img87/qhkynhaejhcgfjzwvtkz.png" />
            <WolframSearch history={this.props.history} />
          </Grid.Column>
          <Grid.Column width={3} align="right">
            <Image size="small" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Wolfram_Language_Logo_2016.svg/1200px-Wolfram_Language_Logo_2016.svg.png" />
          </Grid.Column>
        </Grid.Row>
          {this.props.wolfram.results ? <WolframResults /> : null}
        <Grid.Row>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wolfram: state.wolfram,
  }
}

export default connect(mapStateToProps)(WolframPage);
