import React, { ChangeEvent, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Product } from '../../types/interface.product';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from '../search/search.component.styles';

const Search: React.FC = () => {
  const classes = useStyles();
  const productList = useAppSelector(state => state.inventory);

  const [searchField, setSearchField] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    // 1. convert the input text to lower case
    let lowerCase = event.target.value.toLowerCase();
    console.log('input', lowerCase);

    // 2. find product from inventory
    const searchData: Product[] =
      lowerCase !== ''
        ? productList.filter((product: Product) =>
            product.name.includes(lowerCase)
          )
        : null;
    console.log('search data', searchData);
    setSearchField(lowerCase);
    setFilteredProducts(searchData);
  };

  return (
    <div>
      <FormControl className={classes.search} fullWidth>
        <TextField
          id='filled-basic'
          variant='filled'
          type='search'
          className='search'
          placeholder='Search product'
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </FormControl>
    </div>
  );
};

export default Search;
