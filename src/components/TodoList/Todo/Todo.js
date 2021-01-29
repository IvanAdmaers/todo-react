import PropTypes from 'prop-types';
import cssClasses from './Todo.module.scss';

const Todo = ({ todoId, todoText, completed, onComplite, onRemove }) => (
  <li className={cssClasses.Todo}>
    <span className={`${cssClasses['Todo-item']} ${completed ? `${cssClasses.Completed}` : ''}`}>{todoText}</span>
    <span>
      <button onClick={onComplite.bind(this, todoId)} className={cssClasses['Complete-btn']} type="button">
        <i className={`fas fa-check ${cssClasses['Fa-check']}`} />
      </button>
      <button onClick={onRemove.bind(this, todoId)} className={cssClasses['Trash-btn']} type="button">
        <i className={`fas fa-trash ${cssClasses['Fa-trash']}`} />
      </button>
    </span>
  </li>
);

Todo.propTypes = {
  todoId: PropTypes.number,
  todoText: PropTypes.string,
  completed: PropTypes.bool,
  onComplite: PropTypes.func,
  onRemove: PropTypes.func,
};

Todo.defaultProps = {
  todoId: 0,
  todoText: '',
  completed: false,
  onComplite: () => {},
  onRemove: () => {},
};

export default Todo;
