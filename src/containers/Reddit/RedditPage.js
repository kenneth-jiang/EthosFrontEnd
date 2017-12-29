import React from 'react';
import { Switch, Route } from 'react-router';

import { connect } from 'react-redux';

import RedditFunny from './RedditFunny';
import RedditAww from './RedditAww';
import RedditPics from './RedditPics';
import RedditPopular from './RedditPopular';
import RedditTIL from './RedditTIL';
import RedditPost from './RedditPost';

import { Grid, Button, Card, Image } from 'semantic-ui-react';


class RedditPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="fulldisplay">
        <Grid>
          <Grid.Column width={10}>
            <Button onClick={() => this.props.history.push('/reddit/funny')}>Funny</Button>
            <Button onClick={() => this.props.history.push('/reddit/aww')}>Aww</Button>
            <Button onClick={() => this.props.history.push('/reddit/pics')}>Pics</Button>
            <Button onClick={() => this.props.history.push('/reddit/popular')}>Popular</Button>
            <Button onClick={() => this.props.history.push('/reddit/til')}>TIL</Button>
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={4} align="center">
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
          <Route exact path='/reddit/funny' render={RedditFunny} />
          <Route exact path='/reddit/aww' component={RedditAww} />
          <Route exact path='/reddit/pics' component={RedditPics} />
          <Route exact path='/reddit/popular' component={RedditPopular} />
          <Route exact path='/reddit/til' component={RedditTIL} />
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

export default connect(mapStateToProps)(RedditPage);
