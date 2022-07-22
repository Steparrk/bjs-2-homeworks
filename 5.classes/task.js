class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	}
	set state(state) {
		if(state < 0) {
			state = 0;
			this._state = state;
		}
		else if(state > 100) {
			state = 100;
			this._state = state;
		}else{
			this._state = state;
		}
	}
	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}
class Library extends PrintEditionItem{
	constructor(name) {
		super();
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if(this.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		let findBook = this.books.find(item => item[type] === value);
		if(findBook !== undefined) {
			return findBook;
		}else{
			return null;
		}
	}
	giveBookByName(bookName) {
		let indexBook = this.books.findIndex(item => item.name === bookName);
		if(indexBook !== -1) {
			let giveBook = this.books[indexBook];
			this.books.splice(indexBook, 1);
			return giveBook;
		}else{
			return null;
		}
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = [] ;
	}
	addMark(mark, subjectName) {
		if(mark >= 1 && mark <= 5) {
			this.marks.push({mark, subjectName});
		}else{
			console.log(`Ошибка ввода "${mark}", оценка в пределах 1-5!`);
		}
	}
	getAverage() {
		if(this.marks === undefined) {
			return `${'Оценок нет!'}`
		}
		let sumMarks = this.marks.map((number) => (number.mark));
		return Number((sumMarks.reduce((sum, current) => (sum + current)) / sumMarks.length).toFixed(1));
	}
	getAverageBySubject(subjectName) {
		if(this.marks === undefined) {
			return `${'Оценок нет!'}`
		}
		let marksSubject = this.marks.filter((el) => el.subjectName === subjectName).map((number) => number.mark);

		return Number((marksSubject.reduce((sum, current) => (sum + current)) / marksSubject.length).toFixed(1));
	}
	exclude(reason) {
		delete this.marks;
		return `"${this.name}: ${reason}"`;
	}
}