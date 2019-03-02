import React, { Component } from 'react';
import GraduationRequirement from "./GraduationRequirements.js"
import Semester from "./Semester.js"

const stylization = {
	backgroundColor: "#C5EDEA"
}

const seasons = ['fall', 'winter', 'spring', 'summer'];

class Plan extends Component {
	constructor(props){
		super(props);
		this.state = {
			startingYear: "",
			semesters: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ startingYear: event.target.value });
	}

	handleSubmit(event){
		event.preventDefault();
		var key = 0;
		var newSemesters = [];
		for(var i = 0; i < 4; i++){
			for (var s = 0; s < seasons.length; s+=2){
				newSemesters.push(<Semester key={key++}year={parseInt(this.state.startingYear) + i} season={seasons[s]}/>)
			}
		}
		this.setState({semesters: newSemesters})
	}

	render() {
		return (
			<div style={stylization}>
				<div style={{fontSize: "calc(10px + 2vmin)", textAlign: "center", width: "96%"}}>
					Plan
				</div>
				<div style={{width: "96%", padding: "1vw"}}>
					<form onSubmit={this.handleSubmit}>
						<label>
							<input type="number" placeholder={"Starting Year"} value={this.state.startingYear} onChange={this.handleChange} />
						</label>
					</form>
					{this.state.semesters}
				</div>
			</div>
		);
		// PSEUDO: Once the major is selected, list semesters
		// for fall and spring and let them input the classes that
		// they have taken and plan to take.

		// PSEUDO: While they're inputing their courses, we
		// need to have a drop down menu of suggested classes
		// that they could be typing. (If we got the time)

		// PSEUDO: Hard part, take the courses that they've taken
		// and the ones they plan to take and determine if these
		// will fulfill their course requirements.


	}
}

export default Plan;
