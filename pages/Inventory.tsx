import React, { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
} from '../redux/inventorySlice';
import { Product } from '../types/interface.product';

import FormAddProduct from '../components/form/form.component';

import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddRounded from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  inventory: {
    marginTop: '50px',
  },
  table: {
    paddingTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Inventory: React.FC = () => {
  const classes = useStyles();
  const newProducts = useAppSelector(state => state.inventory);
  const dispatch = useAppDispatch();

  const [showFormComponent, setShowForm] = useState(false);

  //show form component when btn is clicked
  const showForm = () => setShowForm(!showFormComponent);

  return (
    <div className={classes.inventory}>
      <Typography variant='h4' align='center'>
        Inventory
      </Typography>
      <TableContainer sx={{ maxWidth: 800 }} className={classes.table}>
        <Table size='medium' aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>ID</TableCell>
              <TableCell>Product/Item</TableCell>
              <TableCell align='right'>Quantity/Stock</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newProducts.map((product: Product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {product.id.slice(0, 6)}
                </TableCell>
                <TableCell align='left'>{product.name}</TableCell>
                <TableCell align='center'>
                  <label htmlFor='icon-button-file'>
                    <IconButton
                      color='primary'
                      aria-label='decrease stock'
                      component='span'
                      onClick={() => dispatch(decrementQuantity(product.id))}
                    >
                      <RemoveRoundedIcon />
                    </IconButton>
                  </label>
                  {product.quantity}
                  <label htmlFor='icon-button-file'>
                    <IconButton
                      color='primary'
                      aria-label='increase stock'
                      component='span'
                      onClick={() => dispatch(incrementQuantity(product.id))}
                    >
                      <AddRounded />
                    </IconButton>
                  </label>
                </TableCell>
                <TableCell align='center'>{product.price}</TableCell>
                <TableCell align='center'>
                  <Button
                    size='small'
                    variant='contained'
                    startIcon={<DeleteRoundedIcon />}
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <ButtonGroup size='small' variant='contained'>
            <Button onClick={showForm}>Add New Item</Button>
            <Button>Orders </Button>
            <Link href='/'>
              <Button>Home Page </Button>
            </Link>
          </ButtonGroup>
        </Table>
      </TableContainer>
      {showFormComponent && <FormAddProduct />}
    </div>
  );
};

export default Inventory;
