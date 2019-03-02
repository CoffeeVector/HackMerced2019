import React, { Component } from 'react';
import GraduationRequirement from "./GraduationRequirements.js"

const stylization = {
	backgroundColor: "#C5EDEA"
}
class Plan extends Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			semesters: [],
			newSemester: "",
			newSemesterError: false
		}
	}

	handleChange(event){
		this.setState({
			newSemester: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		var newSemesters = this.state.semesters;
		var error = false;
		if(!(this.state.newSemester === "spring" || this.state.newSemester === "Spring"
			|| this.state.newSemester === "fall" || this.state.newSemester === "Fall"
			|| this.state.newSemester === "summer" || this.state.newSemester === "Summer"
			|| this.state.newSemester === "winter" || this.state.newSemester === "Winter"
		)){
			error = true;
		}
		if(error === false){
			newSemesters.push(this.state.newSemester.toLowerCase());
		}
		this.setState({
			semesters: newSemesters,
			newSemester: "",
			newSemesterError: error
		});
		console.log(newSemesters);
	}

	render() {
		return (
			<div style={stylization}>
				<div style={{fontSize: "calc(10px + 2vmin)", textAlign: "center"}}>
					Plan
				</div>
				{(this.props.majorChosen === false) ? "":<div>
					<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
						<form onSubmit={this.handleSubmit}>
							<label>
								Add Semester:
								<input value={this.state.newSemester}style={(this.state.newSemesterError === false) ? {}:{border: "1px solid red"}} onChange={this.handleChange}/>
							</label><br/>
						</form>
					</div>
				</div>}
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
