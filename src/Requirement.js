import React, { Component } from 'react';

const stylization = {
	backgroundColor: "#FFFFFF",
	width: "100%"
}


class Requirements extends Component {
	constructor(props){
		super(props)
	}

	render() {
		const rows = [];
		console.log(this.props.courses);
		for (var i = 0; i < this.props.courses.length; i++){
			rows.push(<tr key={i}><td>{this.props.courses[i][0]} {this.props.courses[i][1]}</td></tr>)
		}
		return (
			<div style={{borderStyle: "solid"}}>
				<div style={{fontSize: "calc(3px + 2vmin)", textAlign: "left"}}>
					{this.props.name}
				</div>
				<table style={stylization}>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Requirements;
