import React from 'react';
import { connect } from 'react-redux';

import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderResults = () => {
    // this.props.search ? this.props.search.results.queryresult.pods.map(pod => <Image src={pod.subpods[0].img.src} />) : null;
    if (this.props !== undefined) {
      if (this.props.search !== undefined) {
        if (this.props.search.results !== undefined) {
          if (this.props.search.results.queryresult !== undefined) {
            if (this.props.search.results.queryresult.pods !== undefined) {
              return this.props.search.results.queryresult.pods.map((pod, index) => {
                return (<Image key={index} src={pod.subpods[0].img.src} />)
              })
            }
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="overflow" style={{height: "100%"}}>
        {this.props.search.isLoaded ?
          <div align="center">
            <h2>Results</h2>
            {this.renderResults()}
          </div>
          :
          <Segment style={{height: "100%"}}>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  }
}

export default connect(mapStateToProps)(Results);


// {(this.props !== undefined && this.props.data.search.results.queryResults !== undefined) ? props.data.search.results.queryResults.pods.map((pod) => {
//   return (<div><Image src={pod.subpods[0].img.src} /></div>)
// }) : null}
