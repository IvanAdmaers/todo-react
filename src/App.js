import './App.css';
import { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: [],
    todoFilter: 'all',
    todoInputText: '',
  };

  inputTextHandler = ({ target: { value } }) => {
    this.setInputValue(value);
  }

  setInputValue = value => {
    this.setState({
      todoInputText: value,
    });
  }

  submitTodoHanlder = e => {
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

  todoDelete = id => {
    const { todos } = this.state;

    const newTodoList = todos.filter(item => item.id !== id);
    
    this.setState({ todos: newTodoList });
  }

  todoComplete = id => {
    const { todos } = this.state;

    const newTodoList = todos.map(item => {
      if (item.id === id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    });

    this.setState({ todos: newTodoList });
  }

  addTodo = todoText => {
    if (!todoText.trim().length) return ;
    const { todos } = this.state;
    const todo = {
      text: todoText,
      id: Date.now(),
      date: new Date(),
      completed: false,
      isShow: true,
    }
    
    todos.push(todo);
    
    this.setState({
      todos,
      todoInputText: '', 
    });
  }

  changeSelectHandler = ({ target: { value } }) => {
    this.setState({
      todoFilter: value,
    }, () => {
      this.todoFilter();
    });

  }

  todoFilter = () => {
    const { todoFilter, todos } = this.state;

    switch (todoFilter) {
      case 'completed':
        this.setState({ todos: todos.map(todo => {
          if (todo.completed) {
            todo.isShow = true
          } else {
            todo.isShow = false
          }
          return todo;
        }) })
        break;
      case 'uncompleted':
        this.setState({ todos: todos.map(todo => {
          if (!todo.completed) {
            todo.isShow = true
          } else {
            todo.isShow = false;
          }
          return todo;
        }) })
        break;
      default:
        this.setState({ todos: todos.map(todo => {
          todo.isShow = true;
          return todo;
        }) })
    }
  }

  addTodosToLocalStorage = () => {
    const { todos } = this.state;

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodosFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos')),
      });
    }
  }

  // Run once when the app start
  componentDidMount = () => {
    this.getTodosFromLocalStorage();
  }

  componentDidUpdate = () => {
    this.addTodosToLocalStorage();
  }

  render() {
    const { todos, todoInputText, todoFilter } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form todoFilterValue={todoFilter} inputText={todoInputText} onTodoSubmit={this.submitTodoHanlder} onSelectChange={this.changeSelectHandler} onInputChangeHandler={this.inputTextHandler} />
        <TodoList onTodoActionsHandler={this.todoActionsHandler} todos={todos} />
      </div>
    );
  }
}

export default App;
