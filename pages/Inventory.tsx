import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import addAndDeleteAction from '../redux/actions/addAndDelete.action';
import quantityAction from '../redux/actions/quantity.action';
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

function createData(
  id: number,
  product: string,
  quantity: number,
  price: number,
  actions: any
) {
  return { id, product, quantity, price, actions };
}

const rows = [
  createData(1, 'Foundation', 159, 24, ''),
  createData(2, 'Concealer', 237, 37, ''),
  createData(3, 'Eye Palletes', 262, 24, ''),
  createData(4, 'Lip Sets', 305, 67, ''),
];

const Inventory: React.FC = () => {
  const classes = useStyles();
  const newProducts = useSelector((state: RootState) => state.addProducts);
  const dispatch = useDispatch();

  const [showFormComponent, setShowForm] = React.useState(false);

  //delete product handler method
  const deleteProduct = (product: any) => {
    dispatch(addAndDeleteAction.deleteProduct(product));
  };

  //show form component when btn is clicked
  const showForm = () => setShowForm(!showFormComponent);

  //increase quantity in stock
  const increaseStock = (product: any) =>
    dispatch(quantityAction.increment(product));

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
                      aria-label='increase stock'
                      component='span'
                      onClick={() => increaseStock(product)}
                    >
                      <AddRounded />
                    </IconButton>
                  </label>
                  {product.quantity}
                  <label htmlFor='icon-button-file'>
                    <IconButton
                      color='primary'
                      aria-label='decrease stock'
                      component='span'
                    >
                      <RemoveRoundedIcon />
                    </IconButton>
                  </label>
                </TableCell>
                <TableCell align='center'>{product.price}</TableCell>
                <TableCell align='center'>
                  <Button
                    size='small'
                    variant='contained'
                    startIcon={<DeleteRoundedIcon />}
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.product}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='left'>{row.product}</TableCell>
                <TableCell align='center'>
                  {' '}
                  <label htmlFor='icon-button-file'>
                    <IconButton
                      color='primary'
                      aria-label='increase stock'
                      component='span'
                    >
                      <AddRounded />
                    </IconButton>
                  </label>
                  {row.quantity}
                  <label htmlFor='icon-button-file'>
                    <IconButton
                      color='primary'
                      aria-label='decrease stock'
                      component='span'
                    >
                      <RemoveRoundedIcon />
                    </IconButton>
                  </label>
                </TableCell>
                <TableCell align='center'>{row.price}</TableCell>
                <TableCell align='center'>
                  {row.actions}
                  <Button
                    size='small'
                    variant='contained'
                    startIcon={<DeleteRoundedIcon />}
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
