import React, { Component } from 'react';
import GraduationRequirement from "./GraduationRequirements.js"

const stylization = {
	backgroundColor: "#C5EDEA"
}

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

	handleChange(event){
		this.setState({
			newSemester: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("startingYear: " + this.state.startingYear);
	}

	render() {
		return (
			<div style={stylization}>
				<div style={{fontSize: "calc(10px + 2vmin)", textAlign: "center"}}>
					Plan
				</div>
				<div style={{padding: "1vw"}}>
					<form onSubmit={this.handleSubmit}>
						<label>
							<input type="text" placeholder={"Starting Year"} value={this.state.startingYear} onChange={this.handleChange} />
						</label>
					</form>
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
