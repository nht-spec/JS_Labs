export function hasOddNumberDivisibleBy3(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return false;
	}
	let checkNumber = false;
	let checkDivisible = false;
	numberList.forEach((number) => {
		if (Number.isInteger(number / 3) === true) {
			checkDivisible = true;
		}
		if (number % 2 === 1) {
			checkNumber = true;
		}
	});
	if (checkNumber === true && checkDivisible === true) {
		return true;
	}
	return false;
}
console.log(hasOddNumberDivisibleBy3([2, 4, 6, 8]));
