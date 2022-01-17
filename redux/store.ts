import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basketSlice from './basketSlice';
import inventorySlice from './inventorySlice';

export const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    basket: basketSlice,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
