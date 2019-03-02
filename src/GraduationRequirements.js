import React, { Component } from 'react';
import Select from 'react-select';
import Requirement from './Requirement.js'

const stylization = {
	backgroundColor: "#C5C8C6",
	overflow: "visible"
}
const majors = [
	{value: 'cse', label: 'Computer Science & Engineering'},
	{value: 'me', label: 'Mechanical Engineering'},
	{value: 'bio', label: 'Biology'},
	{value: 'phys', label: 'Physics'},
	{value: 'math', label: 'Applied Mathematics'}
]

const majorToRequirement = {
}

class GraduationRequirements extends Component {
	constructor(props){
		super(props)
		this.state = {
			major: null
		}
	}

	handleChange = (selectedOption) => {
		this.setState({ major: selectedOption });
		console.log(`Option selected:`, selectedOption);
	}

	render() {
		const selectedMajor = this.state.major
		const generalEducation = (
			<div>
				<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "center"}}>
					General Education Requirements
				</div>
				<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left"}}>
					Lower Division General Education
				</div>
				<Requirement name="Spark Seminar" courses={[["SPARK", "001"]]}/>
				<Requirement name="Written Communication" courses={[["WRI", "010"]]}/>
				<Requirement name="Quantitative Reasoning" courses={[["ECON", "010"], ["MATH", "011"], ["MATH", "021"], ["PHIL", "005"] , ["POLI", "010"], ["PSY", "010"], ["SOC", "010"]]}/>
			</div>
		);
		return (
			<div style={stylization}>
				<div style={{fontSize: "calc(10px + 2vmin)", textAlign: "center"}}>
					Graduation Requirements
				</div>
				<Select
					value={selectedMajor}
					onChange={this.handleChange}
					options={majors}
				/>
				{(this.state.major == null) ? "":
						generalEducation
				}
			</div>
		);
	}
}

export default GraduationRequirements;
