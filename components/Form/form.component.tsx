import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addAndDeleteAction from '../../redux/actions/addAndDelete.action';
import { Product } from '../../types/interface.product';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useStyles from './form.component.styles';

const FormAddProduct: React.FC = () => {
  const classes = useStyles();
  const addProducts = useSelector(state => state);
  const dispatch = useDispatch();

  const [products, setNewProduct] = useState([]);

  //add product handler method
  const addProduct = (event: any) => {
    event.preventDefault();
    // console.log(event.target.product_name.value);
    const formData = event.target;
    const newProduct: Product = {
      id: null,
      product_name: formData.product_name.value,
      price: formData.price.value,
      quantity: formData.quantity.value,
    };
    // console.log(newProduct);

    // // add a new product inside products array
    // setNewProduct([...products, newProduct]);
    // console.log(products);

    dispatch(addAndDeleteAction.addProduct(newProduct));
  };

  return (
    <div>
      <form className={classes.form} onSubmit={addProduct}>
        <Typography variant='h6' component='div'>
          Product Name:
        </Typography>
        <TextField
          id='outlined-search'
          size='small'
          label='Enter Product Name'
          name='product_name'
          type='search'
        />
        <Typography variant='h6' component='div'>
          Price:
        </Typography>
        <TextField
          size='small'
          id='outlined-search'
          label='Price in Euro'
          name='price'
          type='text'
        />
        <Typography variant='h6' component='div'>
          Quantity:
        </Typography>
        <TextField
          id='outlined-search'
          size='small'
          label='How many?'
          name='quantity'
          type='number'
        />
        <Button size='small' variant='contained' type='submit'>
          Add to Inventory
        </Button>
      </form>
    </div>
  );
};

export default FormAddProduct;
