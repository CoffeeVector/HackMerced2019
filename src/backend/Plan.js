import Course from "./Course.js"
import Semester from "./Semester.js"
class Plan {
	constructor(startYear){
		this.semesters = []
		var season = ['Fall', 'Spring']
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "../../courses.txt", false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status === 0)
				{
					var allText = rawFile.responseText;
					var lines = allText.split("\n");
					lines.pop();
					Plan.allCourses = [];
					Plan.sub2num = new Map([]);
					for(var i = 0; i < lines.length; i++){
						var words = lines[i].split(" ");
						var prereqs = [];
						for(var word = 3; word < words.length; word++){
							prereqs.push(words[word]);
						}
						//Plan.allCourses.push(<Course subject={words[0]} number={words[1]} units={words[2]} prerequisites={prereqs}/>);
						Plan.allCourses.push(new Course(words[0], words[1], words[2], prereqs));
						if(Plan.sub2num.get(words[0]) === undefined){
							Plan.sub2num.set(words[0],  new Set([]))
						}
						Plan.sub2num.get(words[0]).add(Plan.allCourses[Plan.allCourses.length - 1]);
					}
					Plan.courseSubjects = [];
					for(var sub of Plan.sub2num){
						Plan.courseSubjects.push({value: sub[0], label: sub[0]});
					}
					Plan.sub2num.set("", new Set([]))
				}
			}
		}
		rawFile.send(null);
		this.semesters = [];
		for (var i = 0; i < 8; i++ ){
			this.semesters.push(new Semester(parseInt(startYear) + Math.floor(i / 4), season[i%2]))
		}
		console.log(this.semesters);
	}

	get semesters() {
		return this._semesters;
	}

	set semesters(value) {
		this._semesters = value;
	}
}
export default Plan;

