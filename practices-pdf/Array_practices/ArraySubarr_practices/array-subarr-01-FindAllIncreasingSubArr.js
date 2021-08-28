export function findAllIncreasingSubArr(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0 || numberList.length < 2) {
		return [];
	}
	let checkValue = [];
	let checkValuev2 = [];
	let checkSumValue = [];
	let getObj = {};
	let number = [];
	let number1 = [];
	let number2 = [];
	const isValid = numberList.values();
	for (const value of isValid) {
		if (typeof value !== 'number') {
			return checkValue;
		}
	}
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] < numberList[i]) {
			getObj[[i - 1]] = [i - 1];
			getObj[[i]] = [i];
		}
	}
	for (const key of Object.entries(getObj)) {
		checkValue.push(Number.parseInt(key));
	}
	numberList.forEach((number, index) => {
		if (checkValue.includes(index) === true) {
			checkValuev2.push(number);
		}
	});
	for (let x = 1; x < checkValuev2.length; x++) {
		if (checkValuev2[x - 1] >= checkValuev2[x]) {
			number.push(x - 1, x);
			number1.push(x - 1);
			number2.push(x);
		}
	}
	if (number1.length > 0) {
		const newValue = checkValuev2.slice(0, number1[0] + 1);
		checkSumValue.push(newValue);
	}
	if (number.length > 0 && number1.length > 0 && number2.length > 0) {
		for (let y = 2; y < number.length; y++) {
			const checkNumber1 = number1.includes(number[y]);
			const checkNumber2 = number2.includes(number[y - 1]);
			if (checkNumber1 === true && checkNumber2 === true) {
				const newValue = checkValuev2.slice(number[y - 1], number[y] + 1);
				checkSumValue.push(newValue);
			}
		}
	}
	const newValuev2 = checkValuev2.slice(number2[number2.length - 1]);
	if (newValuev2.length === 0) {
		return checkSumValue;
	}
	checkSumValue.push(newValuev2);

	return checkSumValue;
}
