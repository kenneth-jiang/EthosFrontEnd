import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Icon } from 'semantic-ui-react';


class NotFound extends React.Component {
  render() {
    return (
      <div align="center"> <br /><br /><br />
        <div style={{fontSize:"80px", color:"red"}}>
          Error 404 <Icon name="frown" />
        </div>
        <h1>Oops! The page you are looking for doesn&apos;t exist.</h1>
        <h3>You can go to our <Link to='/'>home</Link> page or go back to the <a onClick={() => this.props.history.goBack()}>previous</a> page.</h3> <br />
        <Image src="https://media1.tenor.com/images/3a0c9909b542717ce9f651d07c4d4592/tenor.gif?itemid=8985245" />
      </div>
    )
  }
}

export default NotFound;
