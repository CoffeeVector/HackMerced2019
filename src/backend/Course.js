
class Course {
	constructor(subject, number, units, prereq){
		this.subject = subject;
		this.number = number;
		this.units = units;
		this.prereq = prereq;
		this.index = -1;
		this.fulfilled = 0;
	}

	get subject(){
		return this._subject;
	}

	set subject(value){
		this._subject = value;
	}

	get number(){
		return this._number;
	}

	set number(value){
		this._number = value;
	}

	get units(){
		return this._units;
	}

	set units(value){
		this._units = value;
	}

	get prereq(){
		return this._prereq;
	}

	set prereq(value){
		this._prereq = value;
	}

	get index(){
		return this._index;
	}

	set index(value) {
		this._index = value;
	}

	get fulfilled() {
		return this._fulfilled;
	}

	set fulfilled(value) {
		this._fulfilled = value;
	}
}

export default Course;
