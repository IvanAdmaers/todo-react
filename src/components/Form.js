const Form = ({ inputText, onInputChangeHandler, onTodoSubmit, onSelectChange, todoFilterValue }) => {
  return (
    <form onSubmit={onTodoSubmit}>
      <input onChange={onInputChangeHandler} type="text" className="todo-input" value={inputText} />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={onSelectChange} className="filter-todo" value={todoFilterValue}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;