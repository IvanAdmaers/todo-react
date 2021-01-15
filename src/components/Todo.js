const Todo = ({ todoText, todoId, completed }) => {
  return (
    <li className="todo" data-id={todoId}>
      <span className={`todo-item ${completed ? 'completed' : ''}`}>{ todoText }</span>
      <span>
        <button className="complete-btn" type="button">
          <i className="fas fa-check" />
        </button>
        <button className="trash-btn" type="button">
          <i className="fas fa-trash" />
        </button>
      </span>
    </li>
  );
};

export default Todo;