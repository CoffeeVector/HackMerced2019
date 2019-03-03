import React, { Component } from 'react';
import GraduationRequirement from "./GraduationRequirements.js"
import Select from "react-select"
import Course from "./Course.js"
const stylization = {
	backgroundColor: "#C5EDEA"
}

const seasons = ['fall', 'winter', 'spring', 'summer'];

class Plan extends Component {
	constructor(props){
		super(props);
		var emptyList = []
		for(var i = 0; i < 8; i++){
			emptyList.push({value: "", label: ""});
		}
		this.state = {
			startingYear: "",
			semesters: [],
			selectedSubject: emptyList,
			selectedCourseNumber: emptyList,
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
					Plan.courses = [];
					Plan.sub2num = new Map([]);
					for(var i = 0; i < lines.length; i++){
						var words = lines[i].split(" ");
						var prereqs = [];
						for(var word = 3; word < words.length; word++){
							prereqs.push(words[word]);
						}
						Plan.courses.push(<Course subject={words[0]} number={words[1]} units={words[2]} prerequisites={prereqs}/>);
						if(Plan.sub2num.get(words[0]) === undefined){
							Plan.sub2num.set(words[0],  new Set([]))
						}
						Plan.sub2num.get(words[0]).add({value: words[1], label: words[1], course:<Course subject={words[0]} number={words[1]} units={words[2]} prerequisites={prereqs}/> })
					}
					Plan.courseSubjects = [];
					for(var sub of Plan.sub2num){
						Plan.courseSubjects.push({value: sub[0], label: sub[0]});
					}
					Plan.sub2num.set("", new Set([]))

					// printing states of courses
					for(var i = 0; i < Plan.courses.length; i++) {
						console.log(Plan.courses[i]);
					}
				}
			}
		}
		rawFile.send(null);
	}

	handleChange(event) {
		this.setState({ startingYear: event.target.value });
	}

	handleCourseSubjectChange = (index) => (selectedOption) => {
		console.log("selectedOption: " + selectedOption.value);
		var newSelectedSubject = this.state.selectedSubject;
		newSelectedSubject[index] = selectedOption;
		this.setState({ selectedSubject: newSelectedSubject,
			selectedCourseNumber: ""});
	}

	handleCourseNumberChange = (index) => (selectedOption) => {
		var newCourses = this.state.courses[index];
		newCourses.push(selectedOption.course);
		console.log(newCourses);
		console.log(selectedOption);
		this.setState({
			courses: newCourses,
			selectedSubject: {value: "", label: ""},
			selectedCourseNumber: ""
		})
		console.log(`Course Number selected:`, selectedOption);

	}

	handleSubmit(event){
		event.preventDefault();
		var key = 0;
		var newSemesters = [];
		for(var i = 0; i < 4; i++){
			for (var s = 0; s < seasons.length; s+=2){
				//newSemesters.push(<Semester key={key++} year={parseInt(this.state.startingYear) + i} season={seasons[s]}/>)
				newSemesters.push(<div key={(2*i + s/2) * 3}>{seasons[s]}  {parseInt(this.state.startingYear) + i}</div>)
				newSemesters.push(
					<div key={(2*i + s/2)*3 + 1}style={{margin: "0 0", display: "grid", gridTemplateColumns: "50% 50%", gridTemplateRows: "auto", width: "100%"}}>
						<div style={{width: "95%", whitespace: "no-wrap"}}>
							<Select
								name={"Subject" + (2*i + s/2)}
								value={this.state.selectedSubject[2*i + s/2]}
								onChange={this.handleCourseSubjectChange(2*i + s/2)}
								options={Plan.courseSubjects}
							/>
						</div>
						<div style={{width: "100%", whitespace: "no-wrap"}}>
							<Select
								name={"Course Number" + (2*i + s/2)}
								value={this.state.selectedCourseNumber[2*i + s/2]}
								onChange={this.handleCourseNumberChange(2*i + s/2)}
								options={Array.from(Plan.sub2num.get(this.state.selectedSubject[2*i + s/2].value))}
							/>
						</div>
					</div>
				)
				newSemesters.push(
					<div key={(2*i + s/2)*3 + 2}>
						<table style={stylization}>
							<tbody>
								{this.state.courses}
							</tbody>
						</table>
					</div>
				)
			}
		}
		this.setState({semesters: newSemesters})
	}

	render() {
		console.log(this.state.selectedSubject[0])
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
