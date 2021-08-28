export function isIncreasingNumberList(numberList) {
	if (!Array.isArray(numberList) || numberList.length < 2) {
		return false;
	}
	let checkValue = true;
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] >= numberList[i] === false) {
			checkValue = false;
		}
	}
	return checkValue;
}
