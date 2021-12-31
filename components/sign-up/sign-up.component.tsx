import React, { useEffect, useState } from 'react';
import { SignUp } from '../../types/interface.sign-up';
import { v4 as uuidv4 } from 'uuid';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useStyles from './sign-up.component.styles';

const SignUp: React.FC = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usersList, SetUsersList] = useState([]);

  useEffect(() => {
    // Perfom side effects, such as storing data in the browser storage
    const json = JSON.stringify(usersList);
    localStorage.setItem('userList', json);
  }, [usersList]);

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(event.target);

    if (password === confirmPassword) {
      const newUser: SignUp = {
        id: uuidv4(),
        userName: name,
        userEmail: email,
        userPin: password,
        confirmUserPin: confirmPassword,
      };
      // console.log(newUser);
      SetUsersList([...usersList, newUser]);
      // console.log(usersList);
      alert('Saved in Local Storage');
    } else {
      alert('Password and Confirm Password do not match');
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSignUp}>
        <Stack spacing={2}>
          <Typography variant='h5' component='div'>
            Sign up
          </Typography>
          <TextField
            size='small'
            id='Form-Input_signUp_name'
            label='Name'
            name='name'
            type='text'
            onChange={event => setName(event.target.value)}
            required
          />
          <TextField
            size='small'
            id='Form-Input_signUp_email'
            label='Email address'
            name='name'
            type='email'
            onChange={event => setEmail(event.target.value)}
            required
          />
          <TextField
            size='small'
            id='Form-Input_signUp_password'
            label='Password'
            name='password'
            type='password'
            onChange={event => setPassword(event.target.value)}
            required
          />
          <TextField
            size='small'
            id='Form-Input_signUp_passwordConfirm'
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
          <Button
            size='small'
            color='primary'
            variant='contained'
            type='submit'
          >
            Sign Up
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default SignUp;
