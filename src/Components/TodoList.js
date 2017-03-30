// external dependencies
import React from 'react';
import List from 'material-ui/List';
// internal dependecies
import Todo from './Todo';

const TodoList = (props) => {

  var todoNode = props.todos.map((todo) => {
    return (
      <Todo 
        key={ todo.id } 
        todo={ todo.task } 
      />
    )
  })
  return(
    <List style={{marginLeft: '5%'}}>
      <ul>{ todoNode }</ul>
    </List>
    
  ) 
}
  
export default TodoList