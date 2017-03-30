// external dependencies
import React from 'react';

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
		<div style={{marginLeft: '5%'}}>
			<ul>{ todoNode }</ul>
		</div>
		
	) 
}
	
export default TodoList