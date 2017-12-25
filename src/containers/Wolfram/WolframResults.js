import React from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';

import { Image } from 'semantic-ui-react'

class WolframResults extends React.Component {
  renderResults = () => {
    // this.props.search ? this.props.search.results.queryresult.pods.map(pod => <Image src={pod.subpods[0].img.src} />) : null;
    if (this.props !== undefined) {
      if (this.props.wolfram !== undefined) {
        if (this.props.wolfram.results !== undefined) {
          if (this.props.wolfram.results.queryresult !== undefined) {
            if (this.props.wolfram.results.queryresult.pods !== undefined) {
              return this.props.wolfram.results.queryresult.pods.map((pod, index) => {
                return (<Image key={index} src={pod.subpods[0].img.src} />)
              })
            }
          }
        }
      }
    }
  }

  render() {
    if (!this.props.wolfram.results) {
      return <Loading />
    }

    return (
      <div className="overflow" style={{height: "100%"}}>
        <div align="center">
          <h2>Results</h2>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wolfram: state.wolfram,
  }
}

export default connect(mapStateToProps)(WolframResults);


// {(this.props !== undefined && this.props.data.search.results.queryResults !== undefined) ? props.data.search.results.queryResults.pods.map((pod) => {
//   return (<div><Image src={pod.subpods[0].img.src} /></div>)
// }) : null}
