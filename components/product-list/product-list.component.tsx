import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addToBasket } from '../../redux/basketSlice';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import Button from '@mui/material/Button';

import useStyles from './product-list.styles';

const ProductList: React.FC = () => {
  const classes = useStyles();
  const productList = useAppSelector(state => state.inventory);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Grid className={classes.grid} container spacing={4}>
        {productList.map(product => {
          const { id, name, price, imageUrl } = product;
          return (
            <Grid key={id} item xs={12} sm={6} md={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='240'
                    image={imageUrl}
                    alt='flower arrangement'
                  />
                  <CardContent
                    className={classes.content}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='div'
                      align='left'
                    >
                      {name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='div'
                      align='right'
                    >
                      {price}
                      <EuroRoundedIcon fontSize='inherit' />
                    </Typography>
                  </CardContent>
                  <Button
                    size='medium'
                    onClick={() => dispatch(addToBasket(product))}
                  >
                    Add to Basket
                  </Button>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductList;
