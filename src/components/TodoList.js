import Todo from './Todo';

const TodoList = ({ todos, onTodoActionsHandler }) => (
  <div className="todo-container">
    <ul className="todo-list" onClick={onTodoActionsHandler}>
      { todos.map(({ text, id, completed, isShow }) => {
        return (
          isShow && <Todo key={id} completed={completed} todoId={id} todoText={text} />
        );
      }) }
    </ul>
  </div>
);

export default TodoList;