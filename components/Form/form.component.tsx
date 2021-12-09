import React from 'react';
import { useDispatch } from 'react-redux';
import addAndDeleteAction from '../../redux/actions/addAndDelete.action';
import { Product } from '../../types/interface.product';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useStyles from './form.component.styles';

const FormAddProduct: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [products, setNewProduct] = useState([]);

  //add product handler method
  const addProduct = (event: any) => {
    event.preventDefault();
    // console.log(event.target.name.value);
    const formData = event.target;
    const newProduct: Product = {
      id: null,
      name: formData.name.value,
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
        <Stack spacing={2}>
          <Typography variant='h6' component='div'>
            Product Name:
          </Typography>
          <TextField
            size='small'
            id='outlined-search'
            label='Enter Product Name'
            name='name'
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
            size='small'
            id='outlined-search'
            label='How many?'
            name='quantity'
            type='number'
          />
          <Button
            size='small'
            color='primary'
            variant='contained'
            type='submit'
          >
            Add to Inventory
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default FormAddProduct;
