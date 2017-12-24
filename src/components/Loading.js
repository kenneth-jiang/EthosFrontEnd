import React from 'react';
import { Image } from 'semantic-ui-react';

const Loading = () => {
  let gifs = [
    "https://i.imgur.com/jtkTPvb.gif",
    "http://www.girlsgotit.org/images/ajax-loader.gif",
    "https://orig00.deviantart.net/df77/f/2013/094/8/d/loading_logofinal_by_zegerdon-d60eb1v.gif",
    "https://i.imgur.com/gVX3yPJ.gif",
    "https://www.demilked.com/magazine/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-3.gif",
    "https://media1.tenor.com/images/3a0c9909b542717ce9f651d07c4d4592/tenor.gif?itemid=8985245",
    "https://loading.io/spinners/hourglass/lg.sandglass-time-loading-gif.gif"
  ]
  let randomGif = gifs[Math.floor(Math.random() * gifs.length)]
  return (
    <Image size="medium" style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", margin: "auto" }} src={randomGif} />
  )
}

export default Loading;
