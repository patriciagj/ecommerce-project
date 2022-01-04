import React from 'react';

import SignIn from '../components/sign-in/sign-in.component';
import SignUp from '../components/sign-up/sign-up.component';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  login: {
    paddingTop: '200px',
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <Grid container spacing={2} display='flex' justifyContent='center'>
        <Grid item xs={12} sm={6} md={4}>
          <SignIn />
        </Grid>
        <Divider light orientation='vertical' flexItem />
        <Grid item xs={12} sm={6} md={4}>
          <SignUp />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
