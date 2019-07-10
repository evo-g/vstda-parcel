import React, { Component } from 'react';
import TodoForm from './TodoForm';
import ViewTodo from './ViewTodo';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      text: '',
      priority: 0,
    };
    this.handleInputText = this.handleInputText.bind(this);
    this.handleInputPriority = this.handleInputPriority.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.updateTodoList = this.updateTodoList.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSortReverse = this.handleSortReverse.bind(this);
  }

  handleInputText(e) {
    this.setState({ text: e.target.value });
  }

  handleInputPriority(e) {
    this.setState({ priority: e.target.value });
  }

  addTodoHandler() {
    if (this.state.text == '' || this.state.priority == 0) {
      alert('please add text or choose priority')
      return false;
    };
    let todo = {
      text: this.state.text,
      priority: this.state.priority,
      isEditing: false,
      isCompleted: false,
      todoList: this.state.todoList
    };
    let todoListCopy = [...this.state.todoList];
    todoListCopy.push(todo);
    this.setState({
      todoList: todoListCopy,
      text: '',
      isEditing: false,
    }, () => console.log(this.state.todoList));
  }

  updateTodoList(todo, index) {
    console.log(todo);
    let newArray = this.state.todoList;
    newArray.splice(index, 1, todo)
    console.log(newArray)
    this.setState({
        todoList: newArray
    });
    this.handleSort(todo);
  }

  handleDeleteButton(index) {
    let newArray = [...this.state.todoList]
    newArray.splice(index, 1);
    this.setState({
      todoList: newArray,
      isCompleted: false
    }, () => console.log(this.state.todoList));
  }

  handleSort(priority) {
    console.log('sort', priority);
    let newArr = [...this.state.todoList];
    newArr.sort((a, b) => a.priority - b.priority);
    this.setState({ todoList: newArr }, () => console.log('newArr', newArr));
  }

  handleSortReverse(priority) {
    console.log('sort', priority);
    let newArr = [...this.state.todoList];
    newArr.sort((a, b) => b.priority - a.priority);
    this.setState({ todoList: newArr }, () => console.log('newArr', newArr));
  }

  render() {
    return (
      <div className='container'>
        <header className='page-header white'>
          <h1>Very Simple to do app</h1>
          <h3>Track all the things</h3>
        </header>
        <div className='row'>
          {/* TodoForm */}
          <TodoForm
            handleInputText={this.handleInputText}
            handleInputPriority={this.handleInputPriority}
            addTodoHandler={this.addTodoHandler}
            handleSort={this.handleSort}
            handleSortReverse={this.handleSortReverse}
            text={this.state.text}
          />
          {/* Todo */}
          <ViewTodo
            list={this.state.todoList}
            updateTodoList={this.updateTodoList}
            handleDeleteButton={this.handleDeleteButton}
          />
        </div>
      </div>
    );
  }
}

export default App;
