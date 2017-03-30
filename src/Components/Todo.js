import React from 'react';
import {
	blueGrey800,
 	red600,
} from 'material-ui/styles/colors';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

const Todo = (props) => {
	return (
		<ListItem style={{width: '90%'}} rightIconButton={<IconButton iconStyle={{color: red600}}><DeleteIcon/></IconButton>}>
		<div style={{display: 'flex'}}>
			<li style={{color: blueGrey800, fontSize: 18, lineHeight: '24px', marginBottom: '3px'}} >
				{props.todo}
			</li>
			
		</div>
		<Divider />
		</ListItem>
	)
}

export default Todo;