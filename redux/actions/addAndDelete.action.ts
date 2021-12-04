import { ActionType } from './types.action';
import { Product } from '../../types/interface.product';

const addProduct = (product: Product) => {
  return {
    type: ActionType.ADD_PRODUCT,
    payload: product,
  };
};

const deleteProduct = (id: number) => {
  return {
    type: ActionType.DELETE_PRODUCT,
    payload: id,
  };
};

export default {
  addProduct,
  deleteProduct,
};
