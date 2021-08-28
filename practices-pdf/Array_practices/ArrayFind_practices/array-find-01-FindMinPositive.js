export function findMinPositive(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return undefined;
	}
	let checkValue = 0;
	let newArrr = [];
	numberList.forEach((number) => {
		if (number >= 0 && typeof number === 'number') {
			newArrr.push(number);
		}
		if (number < 0 || typeof number !== 'number') {
			checkValue = undefined;
		}
	});
	newArrr.sort(function (a, b) {
		return a - b;
	});
	checkValue = newArrr[0];
	return checkValue;
}
