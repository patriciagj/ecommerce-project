import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Product } from '../types/interface.product';

const initialState = {
  basketItems: [],
  basketTotalQuantity: 0,
  basketTotalAmount: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      // 2. check if we already have a product in the basket we need to increase the quantity, otherwise we add to the basketItems
      const findItemIndex = state.basketItems.findIndex(
        item => item.id === action.payload.id
      );
      // 3. if we already have the item in the basket, increment the basketQuantity
      if (findItemIndex >= 0) {
        state.basketItems[findItemIndex].basketQuantity += 1;
        // 1. avoid duplication in basketItems when we click in the same product multiple times adding basketQuantity property to the object
      } else {
        const currItem = { ...action.payload, basketQuantity: 1 };
        state.basketItems.push(currItem);
      }
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export const basketState = (state: RootState) => state.basket;

export default basketSlice.reducer;
