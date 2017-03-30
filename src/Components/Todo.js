import React, { Component } from 'react';
import {
	blueGrey800,
 	red600,
} from 'material-ui/styles/colors';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

class Todo extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(event) {
		this.props.handleRemove(this.props.id)
	}
	render() {
		return(
			<ListItem style={{width: '90%'}}
						 rightIconButton={<div><IconButton onClick={this.onClick} iconStyle={{color: red600}}><DeleteIcon/></IconButton></div>}>
			<div style={{display: 'flex'}}>
				<li style={{color: blueGrey800, fontSize: 18, lineHeight: '24px', marginBottom: '3px'}} >
					{this.props.todo}
				</li>
			</div>
			<Divider />
		</ListItem>
		)
	}
} 


export default Todo;