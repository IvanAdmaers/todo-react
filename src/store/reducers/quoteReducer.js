import { ADD_QUOTE } from '../actions/actionTypes';

const initialState = {
  quoteText: '',
  quoteAuthor: '',
};

const quoteReducer = (state = initialState, { type, quoteText, quoteAuthor }) => {
  switch (type) {
    case ADD_QUOTE:
      return {
        ...state, quoteText, quoteAuthor,
      };

    default:
      return state;
  }
};

export default quoteReducer;
