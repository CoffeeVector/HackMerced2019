

class Semester {
	constructor(year, season, index){
		this.year = year;
		this.season = season;
		this.courses = [];
		this.index = index;
	}

	get year(){
		return this._year;
	}

	set year(value){
		this._year = value;
	}

	get season() {
		return this._season;
	}

	set season(value) {
		this._season = value;
	}

	get courses() {
		return this._courses;
	}

	set courses(value) {
		this._courses = value;
	}

	get index() {
		return this._index;
	}

	set index(value) {
		this._index = value;
	}

	get prereqs(){
		var out = []
		for (var i = 0; i < this._courses.length; i++) {
			if(!(this._courses[i] === undefined || this._courses[i] === null)) {
				out.push(this._courses[i].prereq)
			}
		}
		return out;
	}

}

export default Semester;
