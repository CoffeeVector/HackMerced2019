import React, { Component } from 'react';
import Select from 'react-styled-select';

const stylization = {
	backgroundColor: "#C5C8C6",
	overflow: "visible"
}

class GraduationRequirements extends Component {
	constructor(props){
		super(props)
		this.state = {
			sleectedOption: null
		}
	}

	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	}

	render() {
		var majors = [
			{value: 'cse', label: 'Computer Science & Engineering'},
			{value: 'me', label: 'Mechanical Engineering'},
			{value: 'bio', label: 'Biology'},
			{value: 'phys', label: 'Physics'},
			{value: 'math', label: 'Applied Mathematics'}
		]
		const { selectedOption } = this.state;
		return (
			<div style={stylization}>
				Graduation Requirements
				<Select
					value={selectedOption}
					onChange={this.handleChange}
					options={majors}
				/>
				Stuff
			</div>
		);
	}
}

export default GraduationRequirements;
