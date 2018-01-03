import React from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Image, Checkbox } from 'semantic-ui-react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { searchNews } from '../../actions/newsActions';


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

  handleToggle = () => this.setState({ useDate: !this.state.useDate });

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleChangeStart = (date) => this.setState({ startDate: date });

  handleChangeEnd = (date) => this.setState({ endDate: date });

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

  render() {
    return (
      <Grid columns={4}>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Search Your Favorite Headline News!</h2> <br /><br />
          <Form onSubmit={this.handleSubmit}>
          <Form.Input icon='search' iconPosition='left' onChange={this.handleChange} value={this.state.searchTerm} action={"Search"}/><br />
        </Form>
        </Grid.Column>
        <Grid.Column width={2}>
        <h3>Filter Dates</h3>
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
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={2} align="right">
          <Image rounded size="small" src="https://images.peotv.com/WhatsOnTV/images/ProgramImages/xlarge/B8A411E3A4EEA59DAC9C4F5994C83F035448B00E5.jpg" onClick={() => this.props.history.push('/news/sources')}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(null, {searchNews})(NewsSearch);
