import React from 'react';
// importing componenets from Material UI
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Typography,
  Input,
  makeStyles,
} from '@material-ui/core';



const Login = () => {
  let url='http://www.google.com'

  const handleLogin = () => {
    fetch('/auth/github')
      .then((data) => {
        console.log('handleLogin', data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <h1>Login Screen</h1>
      <Typography>Username</Typography>
      <Typography>Password</Typography>
      <a href="/auth/github">Login with GitHub</a>
      {/* <a href={url}>Google.com</a> */}
      <Button onClick={handleLogin} size='small' color='primary'>
      Login with GitHub
      </Button>
    </React.Fragment>
  );
};

export default Login;
