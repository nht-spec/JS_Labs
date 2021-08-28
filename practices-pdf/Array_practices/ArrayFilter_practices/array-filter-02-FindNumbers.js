export function findNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let checkValue = [];
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] < numberList[i]) {
			checkValue.push(numberList[i]);
		}
	}
	return checkValue;
}
console.log(findNumbers([1, 1, 3]));
