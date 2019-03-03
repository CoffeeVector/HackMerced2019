

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

}

export default Semester;
