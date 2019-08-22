import React, { Component } from 'react';
//child of ViewTodo

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      priority: this.props.priority,
      id: this.props.id,
      isEditing: false,
      isCompleted: false
    }
    this.highPriority = this.highPriority.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  highPriority() {
    const { priority } = this.props;
    if (priority == 1) {
      return 'danger'
    }
    else if (priority == 2) {
      return 'warning'
    }
    else {
      return 'success'
    }
  }

  handleDelete() {
    const { handleDeleteButton,id } = this.props;
    handleDeleteButton(id);
  }

  onEditClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  } 


  handleSave() {
    const { id, updateTodoList, index } = this.props; 
    let todo = {
      id,
      text: this.state.text,
      priority: this.state.priority,
      isEditing: false,
      isCompleted: false
    };
    updateTodoList(todo, index);
    this.onEditClick();
    if (this.state.isCompleted === true) {
    return this.handleCheckBox();
    }
  }

  handleCheckBox() {
    this.setState({
      isCompleted: !this.state.isCompleted
    });
  }

  render() {
    const { text, priority } = this.props;
    return (
      <React.Fragment>
        {
          (!this.state.isEditing) ?
            <li className={`alert col-12 m-0 alert-${this.highPriority()}`} id={!this.state.isCompleted ? '' : 'strike-through'}>{text}
              <input className='checkBox pull-left' type='checkBox' onClick={this.handleCheckBox}></input>
              <a href='#' className='pull-right ml-2'><span className='glyphicon glyphicon-trash delete-todo' onClick={this.handleDelete}></span></a>
              <a href='#' className='pull-right'><span className='glyphicon glyphicon-edit edit-todo' onClick={this.onEditClick}></span></a>
            </li>
            :
            <li className={`alert col-12 m-0 alert-${this.highPriority()}`}>
              <div className='editForm w-100'>
                <label>
                  <strong>Description</strong>
                </label>
                <textarea name='text' className='update-todo-text' defaultValue={text} onChange={this.handleChange} />
                <label>
                  <strong>Priority</strong>
                </label>
                <br />
                <select 
                  className='update-todo-priority w-50' 
                  onChange={this.handleChange}
                  defaultValue={priority} 
                  name='priority' 
                >
                  <option value='1'>High Prioirty</option>
                  <option value='2'>Medium Priority</option>
                  <option value='3'>Low Priority</option>
                </select>
                <button name='update-todo' type='submit' className='update-todo btn btn-success pull-right m-0' onClick={this.handleSave}>Save</button>
              </div>
            </li>
        }
      </React.Fragment>
    );
  }

}

export default Todo;
