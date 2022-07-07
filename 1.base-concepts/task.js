'use strict';

function solveEquation(a, b, c) {

	let arr = [];

	let d = Math.pow(b, 2) - 4 * a * c;

	if(d === 0) {
		arr.push(-b / 2 * a);
	}
	if(d > 0 && a !== 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}

	return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;
	let lastMonth = date.getMonth();
	let lastYear = date.getFullYear();
	let currentDate = new Date();
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	if (isNaN(percent) || percent === '') {
		return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
	}
	if (isNaN(contribution) || contribution === '') {
		return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
	}
	if (isNaN(amount) || amount === '') {
		return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
	}
	if (isNaN(lastMonth + lastYear)) {
		return (`Не указана дата`);
	}

	let S = amount - contribution;
	let n = ((lastYear - currentYear) * 12) + (lastMonth - currentMonth);
	let P = (percent / 100) / 12;
	let amountMonth = S * (P + (P / (((1 + P) ** n) - 1)));
	totalAmount = Number((amountMonth * n).toFixed(2));

	return totalAmount;
}
