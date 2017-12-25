import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWolframSearch } from '../../actions/wolframSearchActions';
import { Button, Form, Input } from 'semantic-ui-react';

class WolframSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    }
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getWolframSearch(this.state.searchTerm, this.props.history);
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <Form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} />
          <Button>Search</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getWolframSearch,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(WolframSearch);
