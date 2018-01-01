import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Login from '../containers/Authorization/Login';


const Welcome = (props) => {
  console.log(props)
  return (
    <div className="fulldisplay" style={{backgroundImage: "url('http://hdblackwallpaper.com/wallpaper/2015/04/red-and-black-color-mix-28-background-wallpaper.jpg')", backgroundSize: "cover"}}>
      <Container align="center">
        <h1>Hello, please login or sign up!<br /></h1>
        <Login history={props.history} />
        <Link to={'/signup'} >Sign Up</Link>
      </Container>
    </div>
  )
}

export default Welcome;
