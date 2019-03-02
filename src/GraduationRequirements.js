import React, { Component } from 'react';
import Select from 'react-select';

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
			</div>
		);
	}
}

export default GraduationRequirements;
