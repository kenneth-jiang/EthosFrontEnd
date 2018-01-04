import React from 'react';
import { Switch, Route } from 'react-router';

import { connect } from 'react-redux';

import RedditFunny from './RedditFunny';
import RedditAww from './RedditAww';
import RedditPics from './RedditPics';
import RedditPopular from './RedditPopular';
import RedditTIL from './RedditTIL';
import RedditCustom from './RedditCustom';
import RedditPost from './RedditPost';

import { getRedditSelf, searchCustomReddit } from '../../actions/redditActions';

import { Grid, Form, Button, Card, Image } from 'semantic-ui-react';


class RedditPage extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" }
  }

  componentDidMount() {
    this.props.getRedditSelf();
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className="fulldisplay">
        <Grid>
          <Grid.Column align="center" width={3}>
            <br /><Image size="medium" rounded src="https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg" />
          </Grid.Column>
          <Grid.Column align="center" width={11}>
            <br />
            <Button color="red" onClick={() => this.props.history.push('/reddit/popular')}>r/popular</Button>
            <Button color="blue" onClick={() => this.props.history.push('/reddit/funny')}>r/funny</Button>
            <Button color="green" onClick={() => this.props.history.push('/reddit/aww')}>r/aww</Button>
            <Button color="yellow" onClick={() => this.props.history.push('/reddit/pics')}>r/pics</Button>
            <Button color="pink" onClick={() => this.props.history.push('/reddit/til')}>r/TIL</Button> <br /><br /><br /><br />
            Search for a Subreddit! <br /><br />
            <Form onSubmit={() => this.props.searchCustomReddit(this.state.searchTerm, this.props.history)}>
              <Form.Input icon='search' iconPosition="left" width={8} onChange={this.handleChange} value={this.state.searchTerm} action={"Search"} />
            </Form>
          </Grid.Column>
          <Grid.Column width={2} align="center">
            <Card>
              {this.props.reddit.currentUser.icon_img !== undefined ?
                <Image size="medium" src={this.props.reddit.currentUser.icon_img} style={{height:"150px", width:"150px"}} />
              :
                null
              }
              <Card.Content>
                <Card.Header>
                  {this.props.reddit.currentUser.name}
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Switch>
          <Route exact path='/reddit/funny' component={RedditFunny} />
          <Route exact path='/reddit/aww' component={RedditAww} />
          <Route exact path='/reddit/pics' component={RedditPics} />
          <Route exact path='/reddit/popular' component={RedditPopular} />
          <Route exact path='/reddit/til' component={RedditTIL} />
          <Route exact path='/reddit/custom' component={RedditCustom} />
          <Route exact path='/reddit/post' component={RedditPost} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reddit: state.reddit,
  }
}

export default connect(mapStateToProps, { getRedditSelf, searchCustomReddit })(RedditPage);
