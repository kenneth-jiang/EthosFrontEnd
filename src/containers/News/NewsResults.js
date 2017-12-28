import React from 'react';

import { connect } from 'react-redux';

import { Item, Grid } from 'semantic-ui-react';


class NewsResults extends React.Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Item.Group divided>
            {this.props.news.results.articles.map((article) => {
              return (
                <Item>
                  <Item.Image size='medium' src={article.urlToImage} />

                  <Item.Content>
                    <Item.Header as='a'>{article.title}</Item.Header>
                    <Item.Meta>{article.author}</Item.Meta>
                    <Item.Description>{article.description}</Item.Description>
                    <Item.Extra>{article.publishedAt.split('T')[0]}</Item.Extra>
                    <Item.Extra><a href={article.url}>{article.url.slice(0, 50)}</a></Item.Extra>
                  </Item.Content>
                </Item>
              )
            })}
          </Item.Group>
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

export default connect(mapStateToProps)(NewsResults);
