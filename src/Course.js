import React, { Component } from 'react';

const close = {
	align: "right",
	backgroundColor: "#FFFFFF",
}

const green = {
	backgroundColor: "#00FF00",
}

const red = {
	backgroundColor: "#FF0000",
}

const white = {
	backgroundColor: "#FFFFFF",
}

class Course extends Component {
	constructor(props){
		super(props)
		this.state = {
			closed: false,
			fulfilled: 0
		}
	}

	setFulfilled(f) {
		this.setState({fulfilled: f});
	}

	spacing = (preq) => {
		var out = ""
		for(var i = 0; i < preq.length; i+=2) {
			out += preq[i] + preq[i + 1] + "  ";
		}
		return out;
	}

	render() {
		return (
			<tr style={(this.state.fulfilled === 0) ? white:((this.state.fulfilled === -1) ? {red}:{green})}>
				<td style={(this.state.fulfilled === true) ? {white}:{red}}>
					{this.props.subject} {this.props.number} Units: {this.props.units} {(this.props.prerequisites.length === 0) ? "":"Prerequisites: "} {this.spacing(this.props.prerequisites)}
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
