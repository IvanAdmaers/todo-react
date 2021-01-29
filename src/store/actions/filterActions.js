import { CHANGE_FILTER } from './actionTypes';

export const changeFilter = (activeFilter) => ({
  type: CHANGE_FILTER,
  activeFilter,
});