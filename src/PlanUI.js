import React, { Component } from 'react';
import GraduationRequirement from "./GraduationRequirements.js"
import Select from "react-select"
import Plan from "./backend/Plan.js"
import Course from "./backend/Course.js"
const stylization = {
	backgroundColor: "#C5EDEA"
}

const seasons = ['Fall', 'Winter', 'Spring', 'Summer'];

const twoSelect = {
	margin: "0 0",
	display: "grid", gridTemplateColumns: "50% 50%",
	gridTemplateRows: "auto",
	width: "100%",
}

const close = {
	align: "right",
	backgroundColor: "#FFFFFF",
}

const green = {
	backgroundColor: "#00FF00",
	width: "100%",
}

const red = {
	backgroundColor: "#FF0000",
	width: "100%",
}

const white = {
	backgroundColor: "#FFFFFF",
	width: "100%",
}

class PlanUI extends Component {
	constructor(props){
		super(props);
		var emptyList = []
		var emptyList2 = []
		for(var i = 0; i < 8; i++){
			emptyList.push({value: "", label: ""});
			emptyList2.push({value: "", label: ""});
		}
		this.state = {
			startingYear: "",
			semesters: [],
			selectedSubject: emptyList,
			selectedCourseNumber: emptyList2,
			plan: undefined
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ startingYear: event.target.value });
	}

	handleCourseSubjectChange = (index) => (selectedOption) => {
		console.log("selectedOption: " + selectedOption.value);
		this.setState((state, props) => {state.selectedSubject[index] = selectedOption; return {selectedSubject: state.selectedSubject}})
	}
	handleCourseNumberChange = (index) => (selectedOption) => {
		var newPlan = this.state.plan;
		var inserted = false;
		for(var i = 0; i < newPlan.semesters[index].courses.length; i++){
			//inserting into previously removed space
			if (newPlan.semesters[index][i] === null) {
				newPlan.semesters[index].courses[i] = selectedOption.value
				newPlan.semesters[index].courses[i].index = i;
				console.log(newPlan.semesters[index].courses[i].index );
				inserted = true;
				break;
			}
		}
		if(inserted === false){
			newPlan.semesters[index].courses.push(selectedOption.value);
			newPlan.semesters[index].courses[newPlan.semesters[index].courses.length - 1].index = newPlan.semesters[index].courses.length - 1;
			console.log(newPlan.semesters[index].courses[newPlan.semesters[index].courses.length - 1].index );
		}
		var newSelectedSubject = this.state.selectedSubject;
		newSelectedSubject[index] = {value: "", label: ""}

		var newSelectedCourseNumber = this.state.selectedCourseNumber;
		newSelectedCourseNumber[index] = ""
		this.setState({
			plan: newPlan,
			selectedSubject: newSelectedSubject,
			selectedCourseNumber: newSelectedCourseNumber
		});
		console.log(`Course Number selected:`, selectedOption);

	}

	handleSubmit(event){
		event.preventDefault();
		this.setState({plan: new Plan(this.state.startingYear)});
	}

	spacing = (preq) => {
		var out = ""
		for(var i = 0; i < preq.length; i+=2) {
			out += preq[i] + preq[i + 1] + "  ";
		}
		return out;
	}

	render() {
		if(!(this.state.plan=== undefined)){
			for(var sem = 0; sem < this.state.plan.semesters.length; sem++) {
				if (sem === 0){
					if(!(this.state.plan.semesters[sem].prereqs === undefined)) {
						for (var course = 0; course < this.state.plan.semesters[sem].prereqs.length; course++) {
							if(!(this.state.plan.semesters[sem].prereqs[course].length === 0)){
								console.log(this.state.plan.semesters[sem].courses[course]);
								this.state.plan.semesters[sem].courses[course].fulfilled = -1;
							}
						}
					}
				} else {
				}
			}
		}
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

					{(this.state.plan === undefined) ? "":this.state.plan.semesters.map((semester) =>  <div>
						{semester.season} {semester.year}
						<div style={twoSelect}>
							<div style={{width: "95%", whitespace: "no-wrap"}}>
								<Select
									name="Subject"
									value={this.state.selectedSubject[semester.index]}
									onChange={this.handleCourseSubjectChange(semester.index)}
									options={Plan.courseSubjects}
								/>
							</div>
							<div style={{width: "100%", whitespace: "no-wrap"}}>
								<Select
									name="Course Number"
									value={this.state.selectedCourseNumber[semester.index]}
									onChange={this.handleCourseNumberChange(semester.index)}
									options={Array.from(Plan.sub2num.get(this.state.selectedSubject[semester.index].value)).map((course) => { return {value: course, label: course.number}})}
								/>
							</div>
						</div>
						{semester.courses.map((course) =>
							{
								if(!(course === null)){
									return	<div style={{marginTop: "1vh"}}>
										<table style={(course.fulfilled === -1) ? red:white}><tbody>
												<tr><td>{course.subject} {course.number} {(course.prereq.length === 0) ? "":"Prerequisites: "} {this.spacing(course.prereq)}
														<button type="button" style={close} aria-label="Close" onClick={() => {
															this.setState((state, props) => {
																state.plan.semesters[semester.index].courses[course.index] = null;
																return {plan: state.plan}
															})
														}}>
														<span aria-hidden="true">×</span>
													</button>
											</td></tr>
										</tbody>
									</table>
								</div>
								} else {
									return null;
								}
							}
						)}
					</div>
					)}
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

export default PlanUI;
