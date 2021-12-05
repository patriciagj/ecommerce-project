import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Product } from '../types/interface.product';

import FormAddProduct from '../components/form/form.component';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

  return (
    <div>
      <h2>Inventory</h2>
      <TableContainer sx={{ maxWidth: 600 }} className={classes.table}>
        <Table size='medium' aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Product/Item</TableCell>
              <TableCell align='right'>ID</TableCell>
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
                  {product.name}
                </TableCell>
                <TableCell align='center'>{product.id}</TableCell>
                <TableCell align='center'>{product.quantity}</TableCell>
                <TableCell align='center'>{product.price}</TableCell>
                <TableCell align='center'>
                  <Button size='small' variant='contained'>
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
                  {row.product}
                </TableCell>
                <TableCell align='center'>{row.id}</TableCell>
                <TableCell align='center'>{row.quantity}</TableCell>
                <TableCell align='center'>{row.price}</TableCell>
                <TableCell align='center'>
                  {row.actions}
                  <Button size='small' variant='contained'>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <ButtonGroup size='small' variant='contained'>
            <Button>Add New Item</Button>
            <Button>Orders </Button>
            <Link href='/'>
              <Button>Home Page </Button>
            </Link>
          </ButtonGroup>
        </Table>
      </TableContainer>
      <FormAddProduct />
    </div>
  );
};

export default Inventory;
