import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useStyles from './form.component.styles';

const FormAddProduct: React.FC = () => {
  const classes = useStyles();

  const [products, setNewProduct] = useState([]);

  //add product handler method
  const addProduct = (event: any) => {
    event.preventDefault();
    // console.log(event.target.product_name.value);
    const formData = event.target;
    const newProduct: {
      product_name: string;
      price: number;
      quantity: number;
    } = {
      product_name: formData.product_name.value,
      price: formData.price.value,
      quantity: formData.quantity.value,
    };
    // console.log(newProduct);

    // add a new product inside products array
    setNewProduct([...products, newProduct]);
    console.log(products);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={addProduct}>
        Product Name:
        <TextField
          id='outlined-search'
          size='small'
          label='Enter Product Name'
          name='product_name'
          type='search'
        />
        Price:
        <TextField
          size='small'
          id='outlined-search'
          label='Price in Euro'
          name='price'
          type='text'
        />
        Quantity:
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
