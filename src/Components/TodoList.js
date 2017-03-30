// external dependencies
import React, {Component} from 'react';
import List from 'material-ui/List';
// internal dependecies
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

  }
  render() {

     var todoNode = this.props.todos.map((todo) => {
    return (
      <Todo 
        key={ todo.id } 
        todo={ todo.task } 
        id = {todo.id}
        handleRemove={this.props.handleRemove}
        handleCheck={this.props.handleCheck}
      />
    )
  })
    return(
      <List style={{marginLeft: '5%'}}>
      <ul>{ todoNode }</ul>
    </List>
    )
  }
  
  
  
}
  
export default TodoList