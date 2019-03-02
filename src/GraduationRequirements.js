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
		const selectedOption = this.state.selectedOption
		return (
			<div style={stylization}>
				Graduation Requirements
				<Select
					value={selectedOption}
					onChange={this.handleChange}
					options={majors}
				/>
			</div>
		);
	}
}

export default GraduationRequirements;
