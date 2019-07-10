import React, { Component } from 'react';
//child of App

class TodoForm extends Component {
  render() {
    return (
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='card'>
          <h5 className="card-header bg-muted mt-0">Add New Todo</h5>
          <button className='btn btn-block btn-primary w-100 p-2 mt-0' onClick={this.props.handleSort}>Sort</button>
          <button className='btn btn-block btn-info w-100 p-2 mt-0' onClick={this.props.handleSortReverse}>Reverse</button>
          <div className='mt-4 ml-2'>
            <strong><label>I want to...</label></strong>
          </div>
          <div className='mx-1'>
            <textarea
              className='create-todo-text'
              onChange={this.props.handleInputText}
              value={this.props.text}
              name='text'
            />
          </div>
          <div className='mt-4 ml-2'>
            <strong>How much of a priority is this?</strong> <br />
          </div>
          <div className='card-block'>
            <div className='p-2'>
              <select
                className='col-lg-8 create-todo-priority w-100'
                data-defaultvalue='0'
                onChange={this.props.handleInputPriority}
                value={this.props.priority}
                name='priority'
              >
                <option value='0'>Select a Priority</option>
                <option value='1'>High Priority</option>
                <option value='2'>Medium Priority</option>
                <option value='3'>Low Priorirty</option>
              </select> <br />
            </div>
            <div className='card-footer mt-4 bg-muted'>
              <button
                className='btn btn-block btn-success w-100 create-todo'
                onClick={this.props.addTodoHandler}
                name='create-todo'
              >Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
