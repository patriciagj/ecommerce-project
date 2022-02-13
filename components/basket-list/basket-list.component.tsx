import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {
  addToBasket,
  removeFromBasket,
  decrementQuantityFromBasket,
  clearBasket,
  getTotals,
} from '../../redux/basketSlice';
import { Basket } from '../../types/interface.basket';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddRounded from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import useStyles from './basket-list.component.styles';

const BasketList: React.FC = () => {
  const classes = useStyles();
  const basket = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [basket, dispatch]);

  return (
    <div>
      <TableContainer sx={{ maxWidth: 800 }} className={classes.table}>
        <Table size='medium' aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Product</TableCell>
              <TableCell align='center'></TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Quantity</TableCell>
              <TableCell align='center'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.basketItems?.map((basketItem: Basket) => (
              <TableRow key={basketItem.id}>
                <TableCell
                  style={{
                    width: 200,
                    maxWidth: 200,
                  }}
                >
                  <Card
                    style={{
                      border: 'none',
                      boxShadow: 'none',
                    }}
                  >
                    <CardMedia
                      component='img'
                      height='100'
                      image={basketItem.imageUrl}
                      alt={basketItem.name}
                    />
                  </Card>
                </TableCell>
                <TableCell align='center'>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: 100,
                      maxWidth: 100,
                    }}
                  >
                    <Typography variant='h6' align='center'>
                      {basketItem.name}
                    </Typography>
                    <Button
                      size='small'
                      variant='outlined'
                      onClick={() => dispatch(removeFromBasket(basketItem))}
                    >
                      Remove
                    </Button>
                  </Box>
                </TableCell>
                <TableCell align='center'>{basketItem.price}€</TableCell>
                <TableCell align='center'>
                  <label htmlFor='icon-button-file'>
                    <IconButton
                      color='primary'
                      aria-label='decrease quantity'
                      component='span'
                      onClick={() =>
                        dispatch(decrementQuantityFromBasket(basketItem))
                      }
                    >
                      <RemoveRoundedIcon />
                    </IconButton>
                  </label>
                  {basketItem.basketQuantity}
                  <label htmlFor='icon-button-file'>
                    <IconButton
                      color='primary'
                      aria-label='increase quantity'
                      component='span'
                      onClick={() => dispatch(addToBasket(basketItem))}
                    >
                      <AddRounded />
                    </IconButton>
                  </label>
                </TableCell>
                <TableCell align='center'>
                  {basketItem.price * basketItem.basketQuantity}€
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Grid display='flex' className={classes.summary}>
          <Grid item xs={12} sm={8} md={8}>
            <Button
              size='small'
              variant='outlined'
              onClick={() => dispatch(clearBasket())}
            >
              Clear Basket
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Stack spacing={1}>
              <Stack flexDirection='row' gap='60%'>
                <Typography>Subtotal</Typography>
                <Typography>{basket.basketTotalAmount}€</Typography>
              </Stack>
              <Typography variant='caption' align='left'>
                Taxes and shipping calculated at checkout
              </Typography>
              <Button size='medium' variant='contained'>
                Check out
              </Button>
              <Link href='/'>
                <Button size='medium' variant='outlined'>
                  Continue Shopping
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </TableContainer>
    </div>
  );
};

export default BasketList;
