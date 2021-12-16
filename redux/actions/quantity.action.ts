import { QtyActionType } from './types.action';
import { Product } from '../../types/interface.product';

const increment = (product: Product) => {
  return {
    type: QtyActionType.INCREMENT_QTY,
    payload: product,
  };
};

const decrement = (product: Product) => {
  return {
    type: QtyActionType.DECREMENT_QTY,
    payload: product,
  };
};

export default {
  increment,
  decrement,
};
