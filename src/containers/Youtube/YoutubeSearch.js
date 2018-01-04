import React from 'react';
import { connect } from 'react-redux';
import { searchYoutube } from '../../actions/youtubeActions';
import { Form, Input, Image, Button, Icon } from 'semantic-ui-react';


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
      <div align="center">
        <Image size="small" src="http://www.longwan.co/wp-content/uploads/2017/10/youtube-logo-designer-youtube-logo-png-transparent-background-download-diy-logo-designs.png" />
        <Form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} value={this.state.searchTerm} />
          <Button type="submit"><Icon name="search" /></Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, {searchYoutube})(YoutubeSearch);
