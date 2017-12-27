import React from 'react';

import sourceList from '../../services/NewsSourceList';

import { Card, Icon } from 'semantic-ui-react';


class NewsSources extends React.Component {
  renderSources() {
    return sourceList.sources.map((source) => {
      return (
        <Card raised>
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
              <Icon name='heart' corner color="red" onClick={() => alert('hi')}/>

            </Card.Content>
        </Card>
      )
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderSources()}
      </Card.Group>
    )
  }
}

export default NewsSources;
