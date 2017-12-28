import React from 'react';
import { connect } from 'react-redux';

import sourceList from '../../services/NewsSourceList';
import { addClickTerm } from '../../actions/clickActions';
import { searchNewsSource, favoriteNewsSource } from '../../actions/newsActions';

import { Button, Card, Icon } from 'semantic-ui-react';


class NewsSources extends React.Component {
  renderSources() {
    console.log(this.props)
    return sourceList.sources.map((source, index) => {
      return (
        <Card key={index} raised onClick={() => (this.props.addClickTerm(source.name).then(this.props.searchNewsSource(source.id, this.props.history)))}>
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
              <Icon name='heart' corner color="red" onClick={() => this.props.favoriteNewsSource(source)}/>
            </Card.Content>
        </Card>
      )
    })
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.props.history.push('/news')}>Search News</Button><br /><br />
        <Card.Group itemsPerRow={6}>
          {this.renderSources()}
        </Card.Group>
      </div>
    )
  }
}

export default connect(null, { addClickTerm, searchNewsSource, favoriteNewsSource })(NewsSources);
