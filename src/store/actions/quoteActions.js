import { ADD_QUOTE } from './actionTypes';

export const getQuote = () => {
  return async (dispatch) => {
    try {
      const req = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
      const { quotes } = req.ok ? await req.json() : Promise.reject(req);

      return dispatch(addQuote(quotes[0].text, quotes[0].author));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addQuote = (quoteText, quoteAuthor) => ({
  type: ADD_QUOTE,
  quoteText,
  quoteAuthor,
});