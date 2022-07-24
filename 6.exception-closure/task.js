
function parseCount(value) {
	let resultParseInt = Number.parseInt(value);
	if (Number.isNaN(resultParseInt)) {
		throw new Error('Невалидное значение');
	}
	return resultParseInt;
}


function validateCount(value) {
	try {
		return parseCount(value);
	} catch (e) {
		return e;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		let sum1 = a + b;
		let sum2 = a + c;
		let sum3 = b + c;
		if((sum1 < this.c) || (sum2 < this.b) || (sum3 < this.a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	getPerimeter() {
		return this.a + this.b + this.c;
	}
	getArea() {
		let p = (this.getPerimeter()) / 2;
		let s = Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
		return s;
	}
}
	function getTriangle(a, b, c) {
		try{
			return new Triangle(a, b, c);
		} catch {
			return {
				getPerimeter() {
					return "Ошибка! Треугольник не существует";
				},
				getArea() {
					return "Ошибка! Треугольник не существует";
				}
			}
		}
	}