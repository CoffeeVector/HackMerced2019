import React, { Component } from 'react';

const stylization = {
	backgroundColor: "#FFFFFF",
	width: "100%",
}

const close = {
	align: "right",
	backgroundColor: "#FFFFFF",
}

class Course extends Component {
	constructor(props){
		super(props)
		this.state = {
			closed: false
		}
	}


	render() {
		var spacing = (preq) => {
			var out = ""
			for(var i = 0; i < preq.length; i+=2) {
				out += preq[i] + preq[i + 1] + "  ";
			}
			return out;
		}
		return (
			<tr>
				<td>
					{this.props.subject} {this.props.number} Units: {this.props.units} {(this.props.prerequisites.length === 0) ? "":"Prerequisites: "} {spacing(this.props.prerequisites)}
					{
						(this.props.onClose === undefined) ? "":
							<button type="button" style={close} aria-label="Close" onClick={this.props.onClose}>
								<span aria-hidden="true">×</span>
							</button>
					}
				</td>
			</tr>
		);
	}
}
export default Course;
