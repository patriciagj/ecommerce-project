import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '../../redux/hooks';

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
  const newBasket = useAppSelector(state => state.basket.basketTotalQuantity);

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
            <Button color='inherit'>
              <Badge color='secondary' badgeContent={newBasket} showZero>
                <ShoppingBasketRoundedIcon />
              </Badge>
            </Button>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
