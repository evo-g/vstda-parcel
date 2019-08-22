import React from 'react';
import Todo from './Todo';
//child of App

const ViewTodo = (props) => {
  return (
    <div className='col-lg-8 col-md-6 col-sm-12 '>
      <div className='card view-todo'>
        <h5 className='card-header mt-0'>View Todos</h5>
        <div className='card-body alert alert-info p-0 mb-0' name='ViewTodo'>
          {
            props.list.length === 0 ?
              <div className='p-3'>
                <strong><h5>Welcome to Very Simple Todo App</h5>
                </strong> <p>Get started now by adding a new todo on the left.</p>
              </div>
              :
              <ul className='list-unstyled'>
                {
                  props.list.map((listItem, index) =>
                    <Todo
                      key={listItem.id}
                      index={index}
                      id={listItem.id}
                      text={listItem.text}
                      priority={listItem.priority}
                      updateTodoList={props.updateTodoList}
                      handleDeleteButton={props.handleDeleteButton}
                    />
                  )
                }
              </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default ViewTodo;
