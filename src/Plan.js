import React, { Component } from 'react';
import ./GraduationRequirements.js

const stylization = {
	backgroundColor: "#C5EDEA"
}
class Plan extends Component {
	render() {
		return (
			<div style={stylization}>
				Plan
			</div>
		);
		// PSEUDO: Once the major is selected, list semesters
		// for fall and spring and let them input the classes that
		// they have taken and plan to take.

		// PSEUDO: While they're inputing their courses, we
		// need to have a drop down menu of suggested classes
		// that they could be typing. (If we got the time)

		// PSEUDO: Hard part, take the courses that they've taken
		// and the ones they plan to take and determine if these
		// will fulfill their course requirements.


	}
}

export default Plan;
