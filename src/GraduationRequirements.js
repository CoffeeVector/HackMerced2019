import React, { Component } from 'react';
import Select from 'react-select';
import Requirement from './Requirement.js'

const stylization = {
	backgroundColor: "#C5C8C6",
}
const majors = [
	{value: 'cse', label: 'Computer Science & Engineering'},
	{value: 'me', label: 'Mechanical Engineering'},
	{value: 'bio', label: 'Biology'},
	{value: 'phys', label: 'Physics'},
	{value: 'math', label: 'Applied Mathematics'}
]


const majorToRequirement = {
	'cse': <div>
		<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "center", margin: "1vw"}}>
			Major Requirements
		</div>
		<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Computer Science and Engineering Core [28 units]
		</div>
		<Requirement name="Lower Division Requirement [20 units]" logic="all" courses={[["CSE", "015"], ["CSE", "020"], ["CSE", "021"], ["CSE", "030"], ["CSE", "031"], ["ENGR", "065"]]}/>
		<Requirement name="Upper Division Requirement [8 units]" logic="all" courses={[["CSE", "100"], ["CSE", "120"]]}/>
		<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Required Major Preparation [32 Units]
		</div>
		<Requirement name="Mathematics Requirement [20 units]" logic="all" courses={[["MATH", "021"], ["MATH", "022"], ["MATH", "023"], ["MATH", "024"], ["MATH", "032"]]}/>
		<Requirement name="Physics Requirement [8 units]" logic="all" courses={[["PHYS", "008"], ["PHYS", "009"]]}/>
		<Requirement name="Biological or Earth Systems Science Requirement [4 units]" logic="any" courses={[["BIO", "001"], ["BIO", "005"]]}/>
		<Requirement name="Technical Electives Requirement [30 units]" logic="30 units" courses={[["CSE", "1**"]]}/>
	</div>,
	'me': <div>
		<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "center", margin: "1vw"}}>
			Major Requirements
		</div>
		<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Engineering Fundamentals Requirements [18 units]
		</div>
		<Requirement logic="all" courses={[["ENGR", "045"], ["ENGR", "057"], ["ENGR", "130"], ["ENGR", "151"], ["ENGR", "155"]]}/>
		<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Required Major Preparation [36 Units]
		</div>
		<Requirement name="Mathematics Requirement [20 units]" logic="all" courses={[["MATH", "021"], ["MATH", "022"], ["MATH", "023"], ["MATH", "024"], ["MATH", "032"]]}/>
		<Requirement name="Computing Requirement[4 units]" logic="any" courses={[["ME","021"]]}/>
		<Requirement name="Physics Requirement [8 units]" logic="all" courses={[["PHYS", "008"], ["PHYS", "009"]]}/>
		<Requirement name="Biological or Earth Systems Science Requirement [4 units]" logic="any" courses={[["BIO", "001"], ["BIO", "005"], ["ESS","001"], ["ESS","005"]]}/>
	</div>,
	'bio': <div>
		<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "center", margin: "1vw"}}>
			Major Requirements
		</div>
		<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Requirements for Biological Sciences Major
		</div>
		<Requirement name="Biological Sciences Requirement [14 units]" logic="all" courses={[["BIO", "001"], ["BIO", "001L"], ["BIO", "002"], ["BIO", "002L"], ["BIO", "110"]]}/>
		<Requirement name="Chemistry Requirements [8 units]" logic="all" courses={[["CHEM", "002"], ["CHEM", "010"]]}/>
		<Requirement name="Organic Chemistry Requirement [4 units]" logic="any" courses={[["CHEM", "008"], ["CHEM", "008H"]]}/>
		<Requirement name="Mathematics Requirements [8 units]" logic="all" courses={[["MATH", "011"], ["MATH", "012"]]}/>
		<Requirement name="Computer Science Requirement [4 units]" logic="all" courses={[["MATH", "015"]]}/>
		<Requirement name="Probability and Statistics [3-4 units]" logic="any" courses={[["BIO", "018"], ["MATH", "032"], ["ENVE", "105"], ["PSY", "010"]]}/>
		<Requirement name="Physics Requirements [8 units]" logic="all" courses={[["PHYS", "018"], ["PHYS", "019"]]}/>
	</div>,
	'phys':<div>
		<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "center", margin: "1vw"}}>
			Major Requirements
		</div>
		<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Requirements for Physics Major
		</div>
		<Requirement name="Physics Requirements [12 units]" logic="all" courses={[["PHYS", "008"], ["PHYS", "009"], ["PHYS", "010"]]}/>
		<Requirement name="Chemistry Requirement [4 units]" logic="any" courses={[["CHEM", "002"], ["CHEM", "002H"]]}/>
		<Requirement name="Computer Science Requirements [2 units]" logic="any" courses={[["CSE", "020"], ["MATH", "050"]]}/>
		<Requirement name="Mathematics Requirements [20 units]" logic="all" courses={[["MATH", "021"], ["MATH", "022"], ["MATH", "023"], ["MATH", "024"], ["MATH", "032"]]}/>
	</div>,
	'math':<div>
		<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "center", margin: "1vw"}}>
			Major Requirements
		</div>
		<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Requirements for Applied Mathematics
		</div>
		<Requirement name="Mathematics Requirements [20 units]" logic="all" courses={[["MATH", "021"], ["MATH", "022"], ["MATH", "023"], ["MATH", "024"], ["MATH", "032"]]}/>
		<Requirement name="Biological Sciences Requirement [4 units]" logic="any" courses={[["BIO", "001"], ["ESS", "001"], ["ESS", "005"]]}/>
		<Requirement name="Computer Science Requirement [2-4 units]" logic="any" courses={[["CSE", "020"], ["ME", "021"]]}/>
		<Requirement name="Chemistry Requirement [4 units]" logic="any" courses={[["CHEM", "002"], ["CHEM", "002H"]]}/>
		<Requirement name="Physics Requirements [8 units]" logic="all" courses={[["PHYS", "008"], ["PHYS", "009"]]}/>
	</div>
}

const generalEducation = (
	<div>
		<div style={{fontSize: "calc(7px + 2vmin)", textAlign: "center", margin: "1vw"}}>
			General Education Requirements
		</div>
		<div style={{fontSize: "calc(5px + 2vmin)", textAlign: "left", margin: "1vw"}}>
			Lower Division General Education
		</div>
		<Requirement name="Spark Seminar" logic="all" courses={[["SPARK", "001"]]}/>
		<Requirement name="Written Communication" logic="all" courses={[["WRI", "010"]]}/>
		<Requirement name="Quantitative Reasoning" logic="any" courses={[["ECON", "010"], ["MATH", "011"], ["MATH", "021"], ["PHIL", "005"] , ["POLI", "010"], ["PSY", "010"], ["SOC", "010"]]}/>
		<Requirement name="Language" logic="any" courses={[["BIOE", "021"], ["CHN", "002"], ["CSE", "021"], ["FRE", "002"], ["JPN", "002"], ["ME", "021"], ["SPAN", "002"]]}/>
	</div>
);

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
		if(selectedOption != null){
			this.props.majorSelected()
		}
	}

	render() {
		return (
			<div style={stylization}>
				<div style={{fontSize: "calc(10px + 2vmin)", textAlign: "center"}}>
					Graduation Requirements
				</div>
				<div style={{width: "96%", padding: "1vw" }}>
					<Select
						value={this.state.major}
						onChange={this.handleChange}
						options={majors}
					/>
				</div>
				{(this.state.major === null) ? "":
						<div>
							{majorToRequirement[this.state.major.value]}
							{generalEducation}
						</div>

				}
			</div>
		);
	}
}

export default GraduationRequirements;
