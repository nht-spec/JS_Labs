export function removeDuplicatedNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let checkValue = {};
	let newArr = [];
	for (const checkValid of numberList) {
		if (typeof checkValid !== 'number') {
			return newArr;
		}
	}
	numberList.forEach((number) => {
		if (checkValue[number]) {
			checkValue[number] += 1;
		} else {
			checkValue[number] = 1;
		}
	});
	for (const [key, value] of Object.entries(checkValue)) {
		if (value === 1) {
			newArr.push(Number.parseInt(key));
		}
	}
	return newArr;
}
