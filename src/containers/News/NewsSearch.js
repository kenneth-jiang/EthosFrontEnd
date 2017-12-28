import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { searchNews } from '../../actions/newsActions';
import { Form, Input, Button, Grid } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Checkbox } from 'semantic-ui-react';


class NewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      startDate: moment(),
      endDate: moment(),
      useDate: false,
    }
  }

  handleToggle = () => {
    this.setState({ useDate: !this.state.useDate })
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.useDate) {
      const startDate = this.state.startDate._d.toLocaleDateString()
      const endDate = this.state.endDate._d.toLocaleDateString()
      return this.props.searchNews(this.state.searchTerm, startDate, endDate);
    } else {
      return this.props.searchNews(this.state.searchTerm);
    }
  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    })
  }

  render() {
    return (
      <div>
        <Grid columns={4}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <h3>Search News!</h3>
            <Form onSubmit={this.handleSubmit}>
              <Input icon='search' onChange={this.handleChange} value={this.state.searchTerm} />
              <Button type="submit">Search</Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
          <h3>Filter Dates</h3><br/>
          <Checkbox toggle onChange={this.handleToggle} />
            {this.state.useDate ?
              <div>
              Start Date:
              <DatePicker
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeStart}
              />
              End Date:
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
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(null, {searchNews})(NewsSearch);
