import React from 'react';

class Youtube extends React.Component {
  render() {
    return (
      <iframe
        title="youtube"
        id="player"
        type="text/html"
        width="640"
        height="390"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
        frameborder="0">
      </iframe>
    )
  }
}

export default Youtube;
