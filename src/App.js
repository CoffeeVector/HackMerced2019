import React, { Component } from 'react';
import './App.css';
import GraduationRequirements from './GraduationRequirements.js'
import Plan from './Plan.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					On my Way
				</header>
				<div className="App-body">
					<GraduationRequirements majorSelected={() => console.log("MAJOR SELECTED!")}/>
					<Plan/>
				</div>
			</div>
		);
	}
}

export default App;
