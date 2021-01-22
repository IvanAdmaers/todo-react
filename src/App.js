import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import TodoList from './components/TodoList';

import { addTodos, changeFilter } from './store/actions/quizActions';

class App extends Component {
  state = {
    todos: [],
    todoFilter: 'all',
    todoInputText: '',
  };

  inputTextHandler = ({ target: { value } }) => {
    this.setInputValue(value);
  }

  setInputValue = (value) => {
    this.setState({
      todoInputText: value,
    });
  }

  submitTodoHanlder = (e) => {
    e.preventDefault();
    const { todoInputText } = this.state;

    this.addTodo(todoInputText);
  }

  todoActionsHandler = ({ target }) => {
    const className = target.className;
    const parent = target.parentNode.parentNode;
    const parentId = +parent.dataset.id;

    if (className === 'trash-btn') {
      this.todoDelete(parentId);
    } else if (className === 'complete-btn') {
      this.todoComplete(parentId);
    }
  }

  todoDelete = (id) => {
    const { todos } = this.props;

    const newTodoList = todos.filter(item => item.id !== id);
    
    this.props.addTodos(newTodoList);
  }

  todoComplete = (id) => {
    const { todos } = this.props;

    const newTodoList = todos.map(item => {
      if (item.id === id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    });

    this.props.addTodos(newTodoList);
  }

  addTodo = (todoText) => {
    if (!todoText.trim().length) return;
    const { todos } = this.props;

    const todo = {
      text: todoText,
      id: Date.now(),
      date: new Date(),
      completed: false,
      isShow: true,
    };
    
    todos.push(todo);
    
    this.setState({
      todoInputText: '', 
    });

    this.props.addTodos(todos);
  }

  changeSelectHandler = ({ target: { value } }) => {
    this.props.changeFilter(value);
    setTimeout(() => this.todoFilter(), 0);
  }

  todoFilter = () => {
    const { todoFilter, todos } = this.props;

    switch (todoFilter) {
      case 'completed':
        const newTodoCompletedList = todos.map((todo) => {
          todo.completed ? todo.isShow = true : todo.isShow = false;
          return todo;
        });

        this.props.addTodos(newTodoCompletedList);
        break;

      case 'uncompleted':
        const newTodoUncompletedList = todos.map((todo) => {
          !todo.completed ? todo.isShow = true : todo.isShow = false;
          return todo;
        });

        this.props.addTodos(newTodoUncompletedList);
        break;

      default:
        const defaultTodoList = todos.map((todo) => {
          todo.isShow = true;
          return todo;
        });

        this.props.addTodos(defaultTodoList);
    }
  }

  addTodosToLocalStorage = () => {
    const { todos } = this.props;

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodosFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      this.props.addTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }

  componentDidMount = () => {
    this.getTodosFromLocalStorage();
  }

  componentDidUpdate = () => {
    this.addTodosToLocalStorage();
  }

  render() {
    const { todoInputText } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form todoFilterValue={this.props.todoFilter} inputText={todoInputText} onTodoSubmit={this.submitTodoHanlder} onSelectChange={this.changeSelectHandler} onInputChangeHandler={this.inputTextHandler} />
        <TodoList onTodoActionsHandler={this.todoActionsHandler} todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = ({ quizReducer }) => {
  return {
    todos: quizReducer.todos,
    todoFilter: quizReducer.todoFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (todos) => dispatch(addTodos(todos)),
    changeFilter: (filterParam) => dispatch(changeFilter(filterParam)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
