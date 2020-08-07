import React, { Component } from 'react';

class Pokecard extends Component {
	render() {
		const { name, type, experience, id } = this.props;
		return (
			<div>
				<h1>{name}</h1>
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					alt=""
				/>
				<h1>{type}</h1>
				<h1>{experience}</h1>
			</div>
		);
	}
}

export default Pokecard;
