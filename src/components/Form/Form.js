import PropTypes from 'prop-types';
import cssClasses from './Form.module.scss';

const Form = ({ inputText, onInputChangeHandler, onFormSubmit, onFilterChange, activeFilter }) => (
  <form className={cssClasses.Form} onSubmit={onFormSubmit}>
    <div className={cssClasses['Form-input']}>
      <input onChange={onInputChangeHandler} type="text" value={inputText} />
      <button type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </div>
    <div className={cssClasses.Select}>
      <select onChange={({ target: { value } }) => onFilterChange(value)} className={cssClasses['Filter-todo']} value={activeFilter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
);

Form.propTypes = {
  inputText: PropTypes.string,
  onInputChangeHandler: PropTypes.func,
  onFormSubmit: PropTypes.func,
  onFilterChange: PropTypes.func,
  activeFilter: PropTypes.string,
};

Form.defaultProps = {
  inputText: '',
  onInputChangeHandler: () => {},
  onFormSubmit: () => {},
  onFilterChange: () => {},
  activeFilter: '',
};

export default Form;
