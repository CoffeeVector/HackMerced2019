import React, { Component } from 'react';
import Select from 'react-select';

const stylization = {
	backgroundColor: "#FFFFFF",
	width: "100%",
}

const twoSelect = {
	margin: "0 0",
	display: "grid",
	gridTemplateColumns: "50% 50%",
	gridTemplateRows: "auto",
	width: "100%",
}

class Semester extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedSubject: {value: "", label: ""},
			selectedCourseNumber: "",
			courses: []
		}
	}

	getAllPrerequisites() {
		var out = [];
		for(var i = 0; i < this.state.courses.length; i++) {
			out.push(this.state.courses[i].props.prerequisites);
		}
		return out;
	}

	handleCourseSubjectChange = (selectedOption) => {
		this.setState({ selectedSubject: selectedOption,
			selectedCourseNumber: ""});
	}

	handleCourseNumberChange = (selectedOption) => {
		var newCourses = this.state.courses;
		var inserted = false;
		for(var i = 0; i < newCourses.length; i++){
			//inserting into previously removed space
			if (newCourses[i] === null) {
				const currentI = i;
				newCourses[i] = React.cloneElement(selectedOption.course, {
					onClose: () => {
						var nc = this.state.courses;
						nc[currentI] = null;
						this.setState({courses: nc});
					}
				});
				inserted = true;
				break;
			}
		}
		if(inserted === false){
			const currentI = newCourses.length;
			newCourses.push(React.cloneElement(selectedOption.course, {
				onClose: () => {
					var nc = this.state.courses;
					nc[currentI] = null;
					this.setState({courses: nc});
				}
			}));
		}
		this.setState({
			courses: newCourses,
			selectedSubject: {value: "", label: ""},
			selectedCourseNumber: ""
		});
		this.props.prereqCallback(this.getAllPrerequisites());
		this.props.courseCallback(newCourses);
	}

	render() {
		return (
			<div style={{width: "100%"}}>
				<div style={{fontSize: "calc(3px + 2vmin)", textAlign: "left"}}>
					{this.props.season} {this.props.year}
				</div>
				<div style={twoSelect}>
					<div style={{width: "95%", whitespace: "no-wrap"}}>
						<Select
							name="Subject"
							value={this.state.selectedSubject}
							onChange={this.handleCourseSubjectChange}
							options={Semester.courseSubjects}
						/>
					</div>
					<div style={{width: "100%", whitespace: "no-wrap"}}>
						<Select
							name="Course Number"
							value={this.state.selectedCourseNumber}
							onChange={this.handleCourseNumberChange}
							options={Array.from(Semester.sub2num.get(this.state.selectedSubject.value))}
						/>
					</div>
				</div>
				<div>
					<table style={stylization}>
						<tbody>
							{this.state.courses}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Semester;
