import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
			<button
				onClick={() => {
					alert('Clicked!');
				}}
			>
				CLick Me!
			</button>
		);
	}
}

export default Button;
