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

import { Grid, Form, Input, Button, Card, Image } from 'semantic-ui-react';


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
    console.log(this.props);
    return (
      <div className="fulldisplay">
        <Grid>
          <Grid.Column style={{border:"solid"}} width={4}>
            <Button onClick={() => this.props.history.push('/reddit/funny')}>Funny</Button> <br />
            <Button onClick={() => this.props.history.push('/reddit/aww')}>Aww</Button> <br />
            <Button onClick={() => this.props.history.push('/reddit/pics')}>Pics</Button> <br />
            <Button onClick={() => this.props.history.push('/reddit/popular')}>Popular</Button> <br />
            <Button onClick={() => this.props.history.push('/reddit/til')}>TIL</Button>
          </Grid.Column>
          <Grid.Column style={{border:"solid"}} align="center" width={8}>
            Search for a Subreddit!
            <Form onSubmit={() => this.props.searchCustomReddit(this.state.searchTerm, this.props.history)}>
              <Input icon='search' onChange={this.handleChange} value={this.state.searchTerm} />
              <Button type="submit">Search</Button>
            </Form>
          </Grid.Column>
          <Grid.Column style={{border:"solid"}} width={4} align="center">
            <Card>
              {this.props.reddit.currentUser.icon_img !== undefined ?
                <Image src={this.props.reddit.currentUser.icon_img} style={{height:"150px", width:"150px"}} />
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

export default connect(mapStateToProps, {getRedditSelf, searchCustomReddit})(RedditPage);
