export function isSymmetricList(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return false;
	}
	let checkValue = false;
	let checkNumber1 = 0;
	let checkNumber2 = 0;
	for (let i = 1; i < numberList.length - 1; i++) {
		checkNumber1 += numberList[i - 1];
		checkNumber2 += numberList[i + 1];
	}
	if (checkNumber1 === checkNumber2) {
		checkValue = true;
	}
	return checkValue;
}
