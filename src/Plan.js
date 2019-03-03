import React, { Component } from 'react';
import GraduationRequirement from "./GraduationRequirements.js"
import Semester from "./Semester.js"
import Course from "./Course.js"

const stylization = {
	backgroundColor: "#C5EDEA"
}

const seasons = ['Fall', 'Winter', 'Spring', 'Summer'];
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
		rawFile.open("GET", "courses.txt", false);
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
					Semester.sub2num = new Map([]);
					for(var i = 0; i < lines.length; i++){
						var words = lines[i].split(" ");
						var prereqs = [];
						for(var word = 3; word < words.length; word++){
							prereqs.push(words[word]);
						}
						//courses.push(new Course(words[0], words[1], words[2], prereqs));
						courses.push(<Course subject={words[0]} number={words[1]} units={words[2]} prerequisites={prereqs}/>);
						//Semester.courses.push(new Course(words[0], words[1], words[2], prereqs));
						Semester.courses.push(<Course subject={words[0]} number={words[1]} units={words[2]} prerequisites={prereqs}/>);
						if(Semester.sub2num.get(words[0]) === undefined){
							Semester.sub2num.set(words[0],  new Set([]))
						}
						Semester.sub2num.get(words[0]).add({value: words[1], label: words[1], course:<Course subject={words[0]} number={words[1]} units={words[2]} prerequisites={prereqs}/> })
					}
					Semester.courseSubjects = [];
					for(var sub of Semester.sub2num){
						Semester.courseSubjects.push({value: sub[0], label: sub[0]});
					}
					Semester.sub2num.set("", new Set([]))

					// printing states of courses
					for(var i = 0; i < Semester.courses.length; i++) {
						console.log(Semester.courses[i]);
					}
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
