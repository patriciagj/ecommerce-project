import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getTotals } from '../../redux/basketSlice';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Badge from '@mui/material/Badge';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

const NavBar: React.FC = () => {
  // option without useEffect hook:
  // 1. destructuring basketTtotalQuantity from the state
  // const { basketTotalQuantity } = useAppSelector(state => state.basket);
  // 2. change badge content: badgeContent={basketTotalQuantity}

  const basket = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [basket]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <Link href='/login'>
              <Button color='inherit'>
                <PersonRoundedIcon />
                Login
              </Button>
            </Link>
          </IconButton>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <Link href='/basket'>
              <Button color='inherit'>
                <Badge
                  color='secondary'
                  badgeContent={basket.basketTotalQuantity}
                  showZero
                >
                  <ShoppingBasketRoundedIcon />
                </Badge>
              </Button>
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
