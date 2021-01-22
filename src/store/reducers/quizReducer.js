import { ADD_TODOS, SET_FILTER_PARAM } from '../actions/actionTypes';

const initialState = {
  todos: [],
  todoFilter: 'all',
};

const quizReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODOS:
      return {
        ...state, todos: action.payload,
      };

    case SET_FILTER_PARAM:
      return {
        ...state, todoFilter: action.payload,
      };

    default:
      return state
  }
};

export default quizReducer;
