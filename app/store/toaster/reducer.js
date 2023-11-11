import produce from 'immer';
import { TOGGLE_TOAST } from './types';

const initialState = {
  text: '.',
  type: 'success',
  visible: false,
};

export const toaster = produce((draftState, action) => {
  switch (action.type) {
    case TOGGLE_TOAST:
      draftState.type = action.payload.type;
      draftState.visible = action.payload.visible;
      draftState.text = action.payload.text;
      break;
    default:
      break;
  }
}, initialState);
