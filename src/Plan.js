import React, { Component } from 'react';
import GraduationRequirement from "./GraduationRequirements.js"
import Semester from "./Semester.js"
import Course from "./Course.js"

const stylization = {
	backgroundColor: "#C5EDEA"
}

const seasons = ['fall', 'winter', 'spring', 'summer'];
var courses = [];

class Plan extends Component {
	constructor(props){
		super(props);
		this.state = {
			startingYear: "",
			semesters: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "testingcourselist.txt", false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status === 0)
				{
					var allText = rawFile.responseText;
					var lines = allText.split("\n");
					lines.pop();
					Semester.courses = [];
					Semester.courseSubjects = new Set([]);
					for(var i = 0; i < lines.length; i++){
						var words = lines[i].split(" ");
						var prereqs = [];
						for(var word = 3; word < words.length; word++){
							prereqs.push(words[word]);
						}
						courses.push(new Course(words[0], words[1], words[2], prereqs));
						Semester.courses.push(new Course(words[0], words[1], words[2], prereqs));
						Semester.courseSubjects.add(words[0]);
					}
					Semester.courseSubjectNames = Array.from(Semester.courseSubjects);
					Semester.courseSubjects = [];
					for(var j = 0; j < Semester.courseSubjectNames.length; j++){
						Semester.courseSubjects.push({value: Semester.courseSubjectNames[j], label: Semester.courseSubjectNames[j]});
					}
					console.log(Semester.courses);
					console.log(Semester.courseSubjects);
				}
			}
		}
		rawFile.send(null);
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
				newSemesters.push(<Semester key={key++} year={parseInt(this.state.startingYear) + i} season={seasons[s]}/>)
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
