export function findAllNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let checkValue = [];
	numberList.forEach((number) => {
		const checkNumber = number.toString().split(',').join(' ');
		if (checkNumber[0] % 2 === 1) {
			checkValue.push(number);
		}
	});
	return checkValue;
}
