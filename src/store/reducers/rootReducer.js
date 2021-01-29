import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer';
import filterReducer from './filterReducer';
import quoteReducer from './quoteReducer';

export default combineReducers({
  tasksReducer, filterReducer, quoteReducer,
});
