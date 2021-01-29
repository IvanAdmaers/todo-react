import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import TasksAmount from './components/TasksAmount/TasksAmount';
import Quote from './components/Quote/Quote';

// Action creators
import { addTask, competeTask, removeTask } from './store/actions/quizActions';
import { changeFilter } from './store/actions/filterActions';
import { getQuote } from './store/actions/quoteActions';

class App extends Component {
  state = {
    todoInputText: '',
  };

  inputChangeHandler = ({ target: { value } }) => {
    this.setState({ todoInputText: value });
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    const { todoInputText } = this.state;
    const { addTask } = this.props;

    if (!todoInputText || todoInputText.length <= 1) return;
    
    addTask(Date.now(), todoInputText, false);

    this.setState({ todoInputText: '' });
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);

      case 'uncompleted':
        return tasks.filter(task => !task.isCompleted);

      default:
        return tasks;
    }
  }

  getUncompletedTasksAmount = (tasks) => tasks.filter(task => !task.isCompleted).length;
  getCompletedTasksAmount = (tasks) => tasks.filter(task => task.isCompleted).length;

  componentDidMount() {
    const { getQuote } = this.props;

    getQuote();
  }

  render() {
    const { todoInputText } = this.state;
    const { todos, competeTask, removeTask, filter, changeFilter, quote: { quoteText, quoteAuthor } } = this.props;
    const filterTasks = this.filterTasks(todos, filter);

    return (
      <>
      <Helmet>
        <title>Todo List</title>
        <meta name="description" content="This is your todo list" />
      </Helmet>
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form inputText={todoInputText} onInputChangeHandler={this.inputChangeHandler} onFormSubmit={this.formSubmitHandler} activeFilter={filter} onFilterChange={changeFilter}  />
        <TodoList todos={filterTasks} onCompeteTask={competeTask} onRemoveTask={removeTask} />
        <TasksAmount unCompletedTasksAmount={this.getUncompletedTasksAmount(todos)} completedTasksAmount={this.getCompletedTasksAmount(todos)} />
        {quoteText && quoteAuthor && <Quote quoteText={quoteText} quoteAuthor={quoteAuthor} />}
      </div>
      </>
    );
  }
}

const mapStateToProps = ({ tasksReducer: { todos }, filterReducer: filter, quoteReducer }) => {
  return {
    todos,
    filter,
    quote: quoteReducer,
  };
};

export default connect(mapStateToProps, { addTask, competeTask, removeTask, changeFilter, getQuote })(App);
