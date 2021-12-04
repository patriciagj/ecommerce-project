import { ActionType } from '../actions/types.action';
import { Action } from '../actions/interface.action';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const addProducts = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.payload.product_name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];

    case ActionType.DELETE_PRODUCT:
      return state.filter(index => index !== action.payload);
    default:
      return state;
  }
};

export default addProducts;
