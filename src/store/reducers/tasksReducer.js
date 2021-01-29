import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../actions/actionTypes';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const tasksReducer = (state = initialState, { type, id, text, isCompleted }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state, todos: [{ id, text, isCompleted }, ...state.todos]
      };

    case REMOVE_TASK:
      return {
        ...state, todos: state.todos.filter(task => task.id !== id)
      };

    case COMPLETE_TASK:
      return {
        ...state, todos: state.todos.map(task => {
          if (task.id === id) task.isCompleted = !task.isCompleted;
          return task;
        })
      };

    default:
      return state;
  }

};

export default tasksReducer;
