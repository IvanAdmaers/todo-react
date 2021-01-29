import PropTypes from 'prop-types';
import cssClasses from './TasksAmount.module.scss';

const TasksAmount = ({ unCompletedTasksAmount, completedTasksAmount }) => (
  <div className={cssClasses['Tasks-amount']}>
    <div className="amount-uncompleted">Uncompleted: {unCompletedTasksAmount}</div>
    <div className="amount-completed">Completed: {completedTasksAmount}</div>
  </div>
);

TasksAmount.propTypes = {
  unCompletedTasksAmount: PropTypes.number,
  completedTasksAmount: PropTypes.number,
};

TasksAmount.defaultProps = {
  unCompletedTasksAmount: 0,
  completedTasksAmount: 0,
};

export default TasksAmount;
