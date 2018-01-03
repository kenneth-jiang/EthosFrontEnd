import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';

import { searchNewsSource, favoriteNewsSource } from '../../actions/newsActions';
import { addClickTerm } from '../../actions/clickActions';
import sourceList from './NewsSourceList';


class NewsSources extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={2}>
            <Image rounded raised="true" size="small" src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2015/halfofthemos.jpg" onClick={() => this.props.history.push('/news')}/>
          </Grid.Column>
          <Grid.Column width={12}>
            <br /><h1 align="center">News Source List</h1>
          </Grid.Column>
        </Grid> <br /><br />
        <Card.Group itemsPerRow={6}>
          {sourceList.sources.map((source, index) => {
            return (
              <Card key={index} raised onClick={() => (this.props.addClickTerm(source.name + source.category + source.description).then(this.props.searchNewsSource(source.id, this.props.history)))}>
                <Card.Content>
                  <Card.Header>
                    {source.name}
                  </Card.Header>
                  <Card.Meta>
                    {source.category[0].toUpperCase()+source.category.slice(1)}
                  </Card.Meta>
                  <Card.Description>
                    {source.description.slice(0, 80)+"..."}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href={source.url}>
                    {source.url.slice(0, 30)}
                  </a>
                </Card.Content>
                <Card.Content extra align="right">
                  <Icon name='heart' corner color="red" circular onClick={() => this.props.favoriteNewsSource(source)}/>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </div>
    )
  }
}

export default connect(null, { searchNewsSource, favoriteNewsSource, addClickTerm })(NewsSources);
