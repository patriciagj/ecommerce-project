import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useStyles from './sign-in.component.styles';

const SignIn: React.FC = () => {
  const classes = useStyles();

  const [emailLogin, setEmailLogin] = useState(' ');
  const [passwordLogin, setPasswordLogin] = useState(' ');

  //login the user
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const json = localStorage.getItem('userList');
    const users = JSON.parse(json);

    //find in all users if its already registered
    if (users !== null && users.length > 0) {
      const findUser = users.find(
        (currentUser: { userEmail: string; userPin: string }) =>
          currentUser.userEmail === emailLogin &&
          currentUser.userPin === passwordLogin
      );
      if (findUser) {
        alert('Welcome to your account!');
      } else {
        alert('Wrong username or password');
      }
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSignIn}>
        <Stack spacing={2}>
          <Typography variant='h5' component='div'>
            Sign in
          </Typography>
          <TextField
            size='small'
            id='Form-Input_signIn_email'
            label='Email address'
            name='name'
            type='email'
            onChange={event => setEmailLogin(event.target.value)}
            required
          />
          <TextField
            size='small'
            id='Form-Input_signIn_password'
            label='Password'
            name='password'
            type='password'
            onChange={event => setPasswordLogin(event.target.value)}
            required
          />
          <Button
            size='small'
            color='primary'
            variant='contained'
            type='submit'
          >
            Sign In
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default SignIn;
