import React, { Component } from 'react';
import Semester from "./Semester.js"
import Course from "./Course.js"

const stylization = {
	backgroundColor: "#C5EDEA" }

const seasons = ['Fall', 'Winter', 'Spring', 'Summer'];
var courses = [];
class Plan extends Component {
	constructor(props){
		super(props);
		this.state = {
			startingYear: "",
			semesters: [],
			coursesInSemester: [],
			prereqInSemester: []
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
				}
			}
		}
		rawFile.send(null);
	}

	handleChange(event) {
		this.setState({ startingYear: event.target.value });
	}

	courseCallback = (index) => (corses) => {
		var newCoursesInSemester = this.state.coursesInSemester;
		newCoursesInSemester[index] = courses;
		this.setState({coursesInSemester: newCoursesInSemester});
	}

	prereqCallback = (index) => (prereqs) => {
		var newPrereqInSemester = this.state.prereqInSemester;
		newPrereqInSemester[index] = prereqs;
		this.setState({prereqInSemester: newPrereqInSemester});
	}

	handleSubmit(event){
		event.preventDefault();
		var key = 0;
		var newSemesters = [];
		for(var i = 0; i < 4; i++){
			for (var s = 0; s < seasons.length; s+=2){
				newSemesters.push(<Semester key={key++} year={parseInt(this.state.startingYear) + i} season={seasons[s]}
					courseCallback={
						this.courseCallback(2*i + s/2)
					}
					prereqCallback={
						this.prereqCallback(2*i + s/2)
					}
				/>)
			}
		}
		this.setState({semesters: newSemesters})
	}

	render() {
		for(var sem = 0; sem < this.state.prereqInSemester.length; sem++) {
			if (sem === 0){
				if(!(this.state.prereqInSemester[sem] === undefined)){
					for (var course = 0; course < this.state.prereqInSemester[sem].length; course++) {
						if(!(this.state.prereqInSemester[sem][course].length === 0)){
							console.log(this.state.prereqInSemester[sem][course]);
						}
					}
				}
			} else {
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
					{this.state.semesters}
				</div>
			</div>
		);
	}
}

export default Plan;
