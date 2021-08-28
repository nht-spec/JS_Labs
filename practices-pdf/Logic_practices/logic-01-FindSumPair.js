export function findSumPair(numberList, targetSum) {
	let checkValue = [];
	if (
		!Array.isArray(numberList) ||
		numberList.length === 0 ||
		typeof targetSum !== 'number'
	) {
		return [];
	}
	for (const value of numberList) {
		if (typeof value !== 'number') {
			return checkValue;
		}
	}
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] + numberList[i] === targetSum) {
			checkValue.push(numberList[i - 1], numberList[i]);
		}
	}
	if (checkValue.length === 0) {
		const checkNumber = numberList[0] + numberList[numberList.length - 1];
		if (checkNumber === targetSum) {
			checkValue.push(numberList[0], numberList[numberList.length - 1]);
		}
	}
	return checkValue.sort();
}
