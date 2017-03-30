// external dependencies
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import uuid from 'uuid';
import { 
  grey700,
  grey900, 
} from 'material-ui/styles/colors';

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
  }
  handleClick(todo) {
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
  render() {
    console.log(this.state.name)
    return (
      <MuiThemeProvider>
      
       <Paper 
          style={{paddingBottom: '20px', marginTop: 100, marginRight: 20, marginLeft: 20}}>
          <div 
          style = {{
            display: 'flex',
            
          }}
          >
              <div style={{marginLeft: '5%'}}><h1 style={{color: grey700}}>Todo List </h1></div><div style={{marginLeft:'auto', marginRight:'5%', marginTop: 7}}><IconButton><ListIcon/></IconButton></div>
          
          </div>
          
          <TodoList 
            style={{marginLeft: '10%'}}
            todos={this.state.todos}
          />
          <br />
          <div style ={{marginLeft: '5%'}}>
           <AddTodo handleClick = {this.handleClick}/>
          </div>
        </Paper>
      
      </MuiThemeProvider>
      
    );
  }
}

export default Main;