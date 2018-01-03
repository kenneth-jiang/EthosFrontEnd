import React from 'react';
import { connect } from 'react-redux';
import { Segment, Item, Grid, Icon } from 'semantic-ui-react';

import { addClickTerm } from '../../actions/clickActions';
import { favoriteNews } from '../../actions/newsActions';


class NewsResults extends React.Component {
  render() {
    return (
      <Grid align="center">
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
          <Item.Group divided>
            {this.props.news.results.articles.map((article) => {
              return (
                <Item onClick={() => this.props.addClickTerm(article.title + article.author + article.description)}>
                  <Item.Image rounded size='medium' src={article.urlToImage} />
                  <Item.Content>
                    <Item.Header as='a' href={article.url}>{article.title}</Item.Header>
                    <Item.Meta>{article.author}</Item.Meta>
                    <Item.Description>{article.description}</Item.Description>
                    <Item.Extra>{article.publishedAt.split('T')[0]}</Item.Extra>
                    <Item.Extra><a href={article.url}>{article.url.slice(0, 50)}</a></Item.Extra>
                    <Item.Extra align="right">
                      <Icon name='heart' corner color="red" circular onClick={() => this.props.favoriteNews(article)}/>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              )
            })}
          </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

export default connect(mapStateToProps, { addClickTerm, favoriteNews })(NewsResults);
