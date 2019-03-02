import React, { Component } from 'react';
import Select from 'react-select';

const stylization = {
	backgroundColor: "#FFFFFF",
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
			selectedCourseNumber: ""
		}
	}


	handleCourseSubjectChange = (selectedOption) => {
		this.setState({ selectedSubject: selectedOption });
		console.log(`Subject selected:`, selectedOption);
	}

	handleCourseNumberChange = (selectedOption) => {
		this.setState({ selectedCourseNumber: selectedOption });
		console.log(`Course Number selected:`, selectedOption);
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
				<table style={stylization}>
					<tbody>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Semester;
