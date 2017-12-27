import React from 'react';
import { connect } from 'react-redux';
import { searchYoutube } from '../../actions/youtubeActions';
import { Form, Input, Button } from 'semantic-ui-react';


class YoutubeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    }
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchYoutube(this.state.searchTerm);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>Search Youtube Videos!</h3>
        <Input icon='search' onChange={this.handleChange} value={this.state.searchTerm} />
        <Button type="submit">Search</Button>
      </Form>
    )
  }
}

export default connect(null, {searchYoutube})(YoutubeSearch);
