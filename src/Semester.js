import React, { Component } from 'react';
import Select from 'react-select';

const stylization = {
	backgroundColor: "#FFFFFF",
}

class Semester extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedSubject: "",
			selectedCourseNumber: "",
		}
	}


	handleCourseSubjectChange = (selectedOption) => {
		this.setState({ selectedSubject: selectedOption });
		console.log(`Option selected:`, selectedOption);
	}

	render() {
		return (
			<div style={{width: "100%"}}>
				<div style={{fontSize: "calc(3px + 2vmin)", textAlign: "left"}}>
					{this.props.season} {this.props.year}
				</div>
				<div>
					<Select
						name="Subject"
						value={this.state.selectedSubject}
						onChange={this.handleCourseSubjectChange}
						options={Semester.courseSubjects}
					/>
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
