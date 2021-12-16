import { ActionType, QtyActionType } from './types.action';

interface AddAction {
  type: ActionType.ADD_PRODUCT;
  payload: number;
}

interface DeleteAction {
  type: ActionType.DELETE_PRODUCT;
  payload: number;
}

export type Action = AddAction | DeleteAction;

interface IncrementAction {
  type: QtyActionType.INCREMENT_QTY;
  payload: number;
}

interface DecrementAction {
  type: QtyActionType.DECREMENT_QTY;
  payload: number;
}

export type QtyAction = IncrementAction | DecrementAction;
