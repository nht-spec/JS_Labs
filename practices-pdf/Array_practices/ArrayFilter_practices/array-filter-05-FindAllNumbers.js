export function findAllNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let checkValue = [];
	let checkValuev2 = [];
	numberList.forEach((number) => {
		if (number > 0 && number % 2 === 0) {
			checkValue.push(number);
		}
	});
	if (checkValue[0] !== checkValue[1]) {
		return [];
	}
	const value = checkValue.slice(1);
	value.filter((x) => {
		if ((x === value[0]) === true) {
			checkValuev2.push(x);
		}
	});
	return checkValuev2;
}
