import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { getWolframSearch } from '../../actions/wolframActions';


class WolframSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    }
  }

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getWolframSearch(this.state.searchTerm, this.props.history);
  }

  render() {
    return (
      <div>
        <h2>Ask a question or search for a topic!</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input width={16} onChange={this.handleChange} action={"Beep Boop!"}/>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default connect(null, { getWolframSearch })(WolframSearch);
