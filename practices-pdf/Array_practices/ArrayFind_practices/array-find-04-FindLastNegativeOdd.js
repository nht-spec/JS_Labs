export function findLastNegativeOdd(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return undefined;
	}
	let checkValue = 0;
	let newArr = [];
	numberList.forEach((number) => {
		if (number >= 0) {
			checkValue = undefined;
		}
		if (number % 2 === -1) {
			newArr.push(number);
		}
	});
	if (newArr.length === 0) {
		return checkValue;
	}
	return newArr[newArr.length - 1];
}
