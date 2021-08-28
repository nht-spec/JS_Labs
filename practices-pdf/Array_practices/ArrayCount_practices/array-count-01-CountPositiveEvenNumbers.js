export function countPositiveEvenNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	let checkValue = [];
	numberList.forEach((number) => {
		if (number > 0 && number % 2 === 0) {
			checkValue.push(number);
		}
	});
	return checkValue.length;
}
console.log(countPositiveEvenNumbers([2,4,5]))