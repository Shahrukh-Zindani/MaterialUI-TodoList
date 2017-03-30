import React from 'react';
import { blueGrey800 } from 'material-ui/styles/colors';

const Todo = (props) => {
	return (
		<div>
			<li style={{color: blueGrey800, fontSize: 18, lineHeight: '24px', marginBottom: '3px'}} >
				{props.todo}
			</li>
		</div>
	)
}

export default Todo;