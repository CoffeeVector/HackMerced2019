import React, { Component } from 'react';

const stylization = {
	backgroundColor: "#FFFFFF",
	width: "96%",
}

class Course extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<tr><td>{this.props.subject} {this.props.number} units: {this.props.units}</td></tr>
		);
	}
}

export default Course;
