import { TOGGLE_TOAST } from './types';

export const toggleToaster = (data) => ({
  type: TOGGLE_TOAST,
  payload: data,
});
