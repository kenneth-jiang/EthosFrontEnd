import React from 'react';
import { Image } from 'semantic-ui-react';


class Loading extends React.Component {
  render() {
  let gifs = [
    "https://i.imgur.com/jtkTPvb.gif",
    "http://www.girlsgotit.org/images/ajax-loader.gif",
    "https://orig00.deviantart.net/df77/f/2013/094/8/d/loading_logofinal_by_zegerdon-d60eb1v.gif",
    "https://loading.io/spinners/hourglass/lg.sandglass-time-loading-gif.gif",
    "http://i.giftrunk.com/44frgm.gif",
    "https://loading.io/spinners/gears/lg.dual-gear-loading-icon.gif",
    "https://www.netatwork.com/uploads/AAPL/loaders/One%20Moment%20Please%20Star%20Loader.gif",
    "https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif",
    "http://www.greengold.tv/assets/loading.gif"
  ];
  let randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    return <Image size="medium" style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", margin: "auto" }} src={randomGif} />;
  }
}

export default Loading;
