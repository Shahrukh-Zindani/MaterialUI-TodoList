import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import Todo from './Todo';


class TodoList extends Component {
	constructor(props){
    super(props);
  }
  render() {
  	var todoNode = this.props.todos.map((todo) => {
  		return <Todo key={todo.id} todo={todo.task} />
  	})
  	return(
  		<div style= {{marginLeft: '5%'}}>
  			<ul>{todoNode}</ul>
  		</div>
  		
  	)
  }
}
	
export default TodoList