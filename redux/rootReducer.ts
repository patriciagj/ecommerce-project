import { combineReducers } from 'redux';
import addProducts from './reducers/addProduct.reducer';

const rootReducer = combineReducers({
  addProducts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
