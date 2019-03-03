

class Semester {
	constructor(year, season){
		this.year = year;
		this.season = season;
		this.courses = [];
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

}

export default Semester;
