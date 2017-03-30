// external dependencies
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import uuid from 'uuid';
import { grey700 } from 'material-ui/styles/colors';

//internal dependecies
import AddTodo from './AddTodo';
import TodoList from './TodoList';


injectTapEventPlugin();

class Main extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleClick(todo) {
    console.log(this.state)
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:uuid(),
          task:todo,
        }
      ]

    })
  }
  // var that = this;
  handleRemove(id) {
      console.log(this.state)
      const finalTodos = this.state.todos.filter((todo) => {
        if(todo.id != id) return todo
      });
      this.setState({
        todos: finalTodos,
      });
    }

  
  render() {
    console.log(this.state.todos)
    return (
      <MuiThemeProvider>
      
       <Paper 
          style={{paddingBottom: '20px', marginTop: 100, marginRight: 20, marginLeft: 20}}>
          <div 
          style={{
            display: 'flex',
            
          }}
          >
            <div style={{marginLeft: '5%'}}>
              <h1 style={{ textAlign: 'center', color: grey700}}>
                Todo List 
              </h1>
            </div>
            <div style={{marginLeft:'auto', marginRight:'10%', marginTop: 7}}>
              <IconButton>
                <ListIcon/>
              </IconButton>
            </div>
          </div>
          
          <TodoList 
            todos={this.state.todos}
            handleRemove={this.handleRemove} 
          />
          <br />
          <div style={{marginLeft: '5%'}}>
           <AddTodo handleClick={this.handleClick}/>
          </div>
        </Paper>
      
      </MuiThemeProvider>
      
    );
  }
}

export default Main;