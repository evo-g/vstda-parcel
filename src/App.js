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
      id: 0
    };

    this.handleInputText = this.handleInputText.bind(this);
    this.handleInputPriority = this.handleInputPriority.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.updateTodoList = this.updateTodoList.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSortReverse = this.handleSortReverse.bind(this);
    this.handleId = this.handleId.bind(this);
  }

  handleInputText(e) {
    this.setState({ text: e.target.value });
  }

  handleInputPriority(e) {
    this.setState({ priority: e.target.value });
  }

  handleId(id, increaseBy) {
    let newId = id +=increaseBy;
    this.setState({
      id: newId
    });
  }

  addTodoHandler() {
    if (this.state.text == '' || this.state.priority == 0) {
      alert('please add text or choose priority')
      return false;
    };
    const { text, priority, id, todoList } = this.state;
    this.handleId(id, 1);
    let todo = {
      id,
      text,
      priority,
      isEditing: false,
      isCompleted: false,
    };
    let todoListCopy = [...todoList];
    todoListCopy.push(todo);
    this.setState({
      todoList: todoListCopy,
      text: '',
      isEditing: false,
    });
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
    this.setState({ todoList: newArr });
  }

  handleSortReverse(priority) {
    console.log('sort', priority);
    let newArr = [...this.state.todoList];
    newArr.sort((a, b) => b.priority - a.priority);
    this.setState({ todoList: newArr });
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
            id={this.state.id}
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
