import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSearchAnswers } from '../actions/search_actions';
import { Button, Form, Input } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchSearchAnswers(this.state.searchTerm);
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

const mapStateToProps = (state) => {
  return {
    isLoaded: state.isLoaded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSearchAnswers: fetchSearchAnswers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
