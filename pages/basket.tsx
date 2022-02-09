import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '../redux/hooks';

import BasketList from '../components/basket-list/basket-list.component';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  basket: {
    marginTop: '50px',
  },
  basketEmpty: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Basket: React.FC = () => {
  const classes = useStyles();
  const basket = useAppSelector(state => state.basket);

  return (
    <div className={classes.basket}>
      <Typography variant='h4' align='center'>
        Basket
      </Typography>
      {basket.basketItems.length === 0 ? (
        <Box className={classes.basketEmpty}>
          <Stack spacing={4}>
            <Typography variant='subtitle1' align='center'>
              Your basket is currently empty
            </Typography>
            <Link href='/'>
              <Button size='large' variant='contained'>
                Continue Shopping
              </Button>
            </Link>
          </Stack>
        </Box>
      ) : (
        <BasketList />
      )}
    </div>
  );
};

export default Basket;
