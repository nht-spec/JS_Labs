export function countNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	let checkValue = [];
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] > numberList[i] === true) {
			checkValue.push(numberList[i]);
		}
	}
	return checkValue.length;
}
