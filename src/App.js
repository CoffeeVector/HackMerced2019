import React, { Component } from 'react';
import './App.css';
import GraduationRequirements from './GraduationRequirements.js'
import Plan from './Plan.js'

class App extends Component {
	render() {
		var majorSelected = false;
		return (
			<div className="App">
				<header className="App-header">
					On my Way
				</header>
				<div className="App-body">
			<GraduationRequirements majorSelected={() => {
				console.log("MAJOR SELECTED!")
				majorSelected = true}}/>
			<Plan majorChosen={majorSelected}/>
		</div>
	</div>
		);
	}
}

export default App;
