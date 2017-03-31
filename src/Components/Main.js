// external dependencies
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
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
      open: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleClick(todo) {
    console.log(this.state)
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:uuid(),
          task:todo,
          checked:false,
        }
      ]

    })
  }

  handleRemove(id) {
      const finalTodos = this.state.todos.filter((todo) => {
        if(todo.id != id) return todo
      });
      this.setState({
        todos: finalTodos,
        open: true,
      });
  }

  handleCheck(id) {
    // console.log('shah')
    const finalTodos = this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.checked =! todo.checked
        } 
        return todo
      });
      this.setState({
        todos: finalTodos,
      });
  } 

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  
  render() {
    return (
      <MuiThemeProvider>
       <Paper 
          style={{paddingBottom: '20px', marginTop: 100, marginBottom: 100, marginRight: 20, marginLeft: 40}}>
          <div 
          style={{
            display: 'flex',
            
          }}
          >
            <div style={{marginLeft: '44%'}}>
              <h1 style={{ textAlign: 'center', color: grey700}}>
                Todo List 
              </h1>
            </div>
            <div style={{ marginRight:'10%', marginTop: 13}}>
              <IconButton >
                <ListIcon/>
              </IconButton>
            </div>
          </div>
          
          <TodoList 
            todos={this.state.todos}
            handleRemove={this.handleRemove} 
            handleCheck={this.handleCheck} 
          />
          <br />
          <div style={{marginLeft: '5%'}}>
           <AddTodo handleClick={this.handleClick}/>
          </div>
          <Snackbar
          open={this.state.open}
          message="Todo Item deleted"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
        </Paper>
        
      
      </MuiThemeProvider>
      
    );
  }
}

export default Main;