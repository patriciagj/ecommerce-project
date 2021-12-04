import { ActionType } from './types.action';

type Action = {
  type: string;
  payload: number;
};

interface AddAction {
  type: ActionType.ADD_PRODUCT;
  payload: number;
}

interface DeleteAction {
  type: ActionType.DELETE_PRODUCT;
  payload: number;
}

export type Action = AddAction | DeleteAction;
