import { ADD_TODOS, SET_FILTER_PARAM } from './actionTypes';

export const addTodos = (todos) => {
  return {
    type: ADD_TODOS,
    payload: todos,
  };
};

export const changeFilter = (filterParam) => {
  return {
    type: SET_FILTER_PARAM,
    payload: filterParam,
  };
};