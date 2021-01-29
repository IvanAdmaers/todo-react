import { CHANGE_FILTER } from '../actions/actionTypes';

const initialState = 'all';

const filterReducer = (state = initialState, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;

    default:
      return state;
  }
};

export default filterReducer;
