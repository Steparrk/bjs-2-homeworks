console.log(getArrayParams([-99, 99, 10]));
console.log(getArrayParams([1, 2, 3, -100, 10]));
console.log(getArrayParams([5]));

console.log(makeWork([[1, 2, 3], [4, 5, 6]],worker));
console.log(makeWork([[10, 10, 11], [20, 10]],worker));
console.log(makeWork([[0, 0, 0], [-1, -100]],worker));

console.log(makeWork([[10, 20, 30], [-40, -50, -65]],worker2));
console.log(makeWork([[10, 10, 11], [20, 10]],worker2));
console.log(makeWork([[0, 1, 2], [-1, -100]],worker2));