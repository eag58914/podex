import React, { Component } from 'react';

class RandomNumber extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
		this.handleRandom = this.handleRandom.bind(this);
	}
	handleRandom(e) {
		this.setState({ number: this.getRandomNumber() });
	}
	getRandomNumber() {
		return Math.floor(Math.random() * 10);
	}
	render() {
		return (
			<div>
				<h1>Your number is:{this.state.number} </h1>
				{this.state.number === 7 && <h2>YOU WIN!</h2>}
				<button onClick={this.handleRandom}>Randomize!</button>
			</div>
		);
	}
}

export default RandomNumber;
