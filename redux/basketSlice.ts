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
    removeFromBasket: (state, action: PayloadAction<Product>) => {
      // 1. find the item
      const nextBasketItems = state.basketItems.filter(
        basketItem => basketItem.id !== action.payload.id
      );
      // 2. update the state
      state.basketItems = nextBasketItems;
    },
    decrementQuantityFromBasket: (state, action: PayloadAction<Product>) => {
      const findItemIndex = state.basketItems.findIndex(
        basketItem => basketItem.id === action.payload.id
      );
      if (state.basketItems[findItemIndex].basketQuantity > 1) {
        state.basketItems[findItemIndex].basketQuantity -= 1;
        // check if the item quantity is equal to 1, remove from cart
      } else if (state.basketItems[findItemIndex].basketQuantity === 1) {
        const nextBasketItems = state.basketItems.filter(
          basketItem => basketItem.id !== action.payload.id
        );
        state.basketItems = nextBasketItems;
      }
    },
    getTotals: state => {
      let { total, quantity } = state.basketItems.reduce(
        // first parameter(basketTotal) is the accumulator
        (basketTotal, basketItem) => {
          const { price, basketQuantity } = basketItem;
          const itemTotal = price * basketQuantity;

          basketTotal.total += itemTotal;
          basketTotal.quantity += basketQuantity;

          return basketTotal;
        },
        // initial value of the accumulator
        {
          total: 0,
          quantity: 0,
        }
      );
      // update the state
      state.basketTotalAmount = total;
      state.basketTotalQuantity = quantity;
    },
    clearBasket: state => {
      state.basketItems = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  decrementQuantityFromBasket,
  getTotals,
  clearBasket,
} = basketSlice.actions;

export const basketState = (state: RootState) => state.basket;

export default basketSlice.reducer;
