import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddTodo extends Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}
	onClick(event) {
		event.preventDefault();
		var todo = this.input.getValue(); 
		var form = document.getElementById("myForm");
		form.reset()
		this.props.handleClick(todo);

	}
	render() {
		return(
			<MuiThemeProvider>
				<div>
					<form id="myForm">
					<Paper style={{width: '95%'}} zDepth={5}>
					<div 
						style={{marginLeft: '10px'}}
					>
						<TextField 
							hintText="What needs to be done?"
							className="AddText" 
							fullWidth={true}
							ref={ (input) => {this.input= input} }
						>
						</TextField>
					</div>
					</Paper>
						<br/>
						<RaisedButton 
							type="submit" 
							label='Add todo' 
							primary={true}  
							onClick={this.onClick} 
						/>
					</form>
					
				</div>
			</MuiThemeProvider>
		)
	}
}

export default AddTodo;
