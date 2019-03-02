import React, { Component } from 'react';
import Select from 'react-select';

const stylization = {
	backgroundColor: "#FFFFFF",
}

class Semester extends Component {
	render() {
		return (
			<div style={{width: "100%"}}>
				<div style={{fontSize: "calc(3px + 2vmin)", textAlign: "left"}}>
					{this.props.season} {this.props.year}
				</div>
				<div>
					<Select
						value={"Hold up"}
						onChange={this.handleChange}
						options={[]}
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
