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
			<tr><td>
					{this.props.subject} {this.props.number} Units: {this.props.units} {(this.props.prerequisites.length == 0) ? "":"Prerequisites: "} {this.props.prerequisites}
				</td>
			</tr>
		);
	}
}
export default Course;
