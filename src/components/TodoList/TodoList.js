import PropTypes from 'prop-types';
import Todo from './Todo/Todo';
import cssClasses from './TodoList.module.scss';

const TodoList = ({ todos, onCompeteTask, onRemoveTask }) => (
  <div className={cssClasses['Todo-container']}>
    <ul className={cssClasses['Todo-list']}>
      {todos && todos.map(({ id, text, isCompleted }) => (
          <Todo key={id} completed={isCompleted} todoId={id} todoText={text} onComplite={onCompeteTask} onRemove={onRemoveTask} />
       ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  onCompeteTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onCompeteTask: () => {},
  onRemoveTask: () => {},
};

export default TodoList;
