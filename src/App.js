import React from 'react';
import Pokedex from './Pokedex.js';
import Button from './Button';
import BrokenClick from './BrokenClick';

function App() {
	return (
		<div className="App">
			<Pokedex />
			<Button />
			<BrokenClick />
		</div>
	);
}

export default App;
