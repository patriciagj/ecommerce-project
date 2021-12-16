import { ActionType, QtyActionType } from '../actions/types.action';
import { Action, QtyAction } from '../actions/interface.action';
import { Product } from '../../types/interface.product';
import { v4 as uuidv4 } from 'uuid';

const initialState: Product[] = [];

const addProducts = (state = initialState, action: Action | QtyAction) => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.payload.name,
          price: action.payload.price,
          quantity: Number(action.payload.quantity),
        },
      ];
    case ActionType.DELETE_PRODUCT:
      return state.filter(id => id !== action.payload);

    case QtyActionType.INCREMENT_QTY:
      const existingProductIndex = findProductIndex(state, action.payload.id);

      if (existingProductIndex >= 0) {
        let product = state[existingProductIndex];
        product.quantity = action.payload.quantity + 1;

        state[existingProductIndex] = product;
      }
      return [...state];

    default:
      return state;
  }
};

export default addProducts;

const findProductIndex = (state: Product[], productID: string) => {
  return state.findIndex((product: Product) => product.id === productID);
};
