import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import inventoryData from './inventory.initialState';
import type { Product } from '../types/interface.product';
import { v4 as uuidv4 } from 'uuid';

// Define the initial state using that type
const initialState: Product[] = inventoryData;

const findProductIndex = (state: Product[], productID: string) => {
  return state.findIndex((product: Product) => product.id === productID);
};

export const inventorySlice = createSlice({
  name: 'inventory',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.payload.name,
          price: action.payload.price,
          quantity: Number(action.payload.quantity),
        },
      ];
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      return state.filter(product => product.id !== action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existingProductIndex = findProductIndex(state, action.payload);

      if (existingProductIndex >= 0) {
        let product = state[existingProductIndex];
        product.quantity = product.quantity + 1;

        state[existingProductIndex] = product;
      }
      return state;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existingProductIndex = findProductIndex(state, action.payload);

      if (existingProductIndex >= 0) {
        let product = state[existingProductIndex];
        product.quantity = product.quantity - 1;

        state[existingProductIndex] = product;
      }
      return state;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
} = inventorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const inventoryState = (state: RootState) => state.inventory;

export default inventorySlice.reducer;
