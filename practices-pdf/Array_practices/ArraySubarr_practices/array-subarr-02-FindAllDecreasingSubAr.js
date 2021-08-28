export function findAllDecreasingSubArr(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let checkValue = [];
	let checkNumber = [];
	let checkNumberv2 = [];
	let checkNumberv3 = [];
	for (const number of numberList) {
		if (typeof number !== 'number') {
			return checkValue;
		}
	}
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] < numberList[i] === true) {
			checkNumber.push(i - 1, i);
			checkNumberv2.push(i - 1);
			checkNumberv3.push(i);
		}
	}
	const test = numberList.slice(0, checkNumberv2[0] + 1);
	if (test.length >= 3) {
		checkValue.push(test);
	}

	for (let x = 2; x < checkNumber.length; x++) {
		const test = numberList.slice(checkNumber[x - 1], checkNumber[x]);
		if (test.length >= 3) {
			checkValue.push(test);
		}
	}
	const test2 = numberList.slice(checkNumberv3[checkNumberv3.length - 1]);
	if (test2.length >= 3) {
		checkValue.push(test2);
	}
	return checkValue;
}
