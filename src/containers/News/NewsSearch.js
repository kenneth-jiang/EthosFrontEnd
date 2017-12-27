import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { searchNews } from '../../actions/newsActions';
import { Form, Input, Button, Grid } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class NewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      startDate: moment(),
      endDate: moment(),
      useDate: true,
    }
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchNews(this.state.searchTerm);
  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div>
      <Grid style={{border:"solid"}} align="center">

        <Form onSubmit={this.handleSubmit}>
          <h3>Search News Videos!</h3>
          <Input icon='search' onChange={this.handleChange} value={this.state.searchTerm} />
          <Button type="submit">Search</Button>
        </Form>
      

        <Button onClick={() => this.setState({useDate: !this.state.useDate})}>Toggle Date</Button>
        {this.state.useDate ?
          <div>
            <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            />
            <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            />
          </div>
        :
          null
        }
        <Input icon='search' onChange={this.handleChange} value={this.state.searchTerm} />
      
        <Input icon='search' onChange={this.handleChange} value={this.state.searchTerm} />
        <Input icon='search' onChange={this.handleChange} value={this.state.searchTerm} />
      </Grid>
      </div>
    )
  }
}

export default connect(null, {searchNews})(NewsSearch);
