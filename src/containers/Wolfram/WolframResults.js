import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Image, Icon } from 'semantic-ui-react'

import { favoriteWolfram } from '../../actions/wolframActions';
import { addClickTerm } from '../../actions/clickActions';


class WolframResults extends React.Component {
  render() {
    const { queryresult } = this.props.wolfram.results;
    return (
      <Grid className="fulldisplay">
        <Grid.Column width={12}>
          <div style={{float:"right"}}>
            <Icon circular name="heart" color="red" align="right" onClick={() => this.props.favoriteWolfram(queryresult)} />
          </div> <br /><br />
          {queryresult.pods !== undefined ?
            queryresult.pods.map((pod, index) => {
              return (
                <Segment key={index} onClick={() => this.props.addClickTerm(pod.title)}>
                  {pod.title} <br /><br />
                  <Image src={pod.subpods[0].img.src} />
                </Segment>
              )
            })
          :
            null
          }
        </Grid.Column>
        <Grid.Column width={4}>
          {queryresult.sources !== undefined ?
            <div>
              <h2 align="center">Sources</h2>
              {queryresult.sources.map((source, index) => {
                return (
                  <li key={index}>
                    <a href={source.url} onClick={() => this.props.addClickTerm(source.text)}>
                      {source.text}
                    </a>
                  </li>
                )
              })}
            </div>
          :
            null
          }
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wolfram: state.wolfram,
  }
}

export default connect(mapStateToProps, { favoriteWolfram, addClickTerm })(WolframResults);
