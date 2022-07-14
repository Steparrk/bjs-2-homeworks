function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
	this.subjectName = subjectName;
	this.subject = subjectName;
	delete this.subjectName;
}

Student.prototype.addMark = function(mark) {
	this.mark = mark;
	if(this.marks === undefined){ 
		this.marks = [];
		this.marks.push(mark);
	} else {
		this.marks.push(mark);
	}
	delete this.mark;
}

Student.prototype.addMarks = function(...args) {
	this.marks = args;
}

Student.prototype.getAverage = function() {
	return ((this.marks.reduce((sum, current) => sum + current)) / (this.marks.length));
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.reason = reason;
	this.excluded = reason;
	delete this.reason;
}