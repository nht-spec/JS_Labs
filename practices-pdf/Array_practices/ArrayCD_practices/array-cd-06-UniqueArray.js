export function uniqueArray(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	const checkValid = numberList.values();
	let checkValue = [];
	let newObj = {};
	for (const checkValid of numberList) {
		if (typeof checkValid !== 'number') {
			return checkValue;
		}
	}
	numberList.forEach((number) => {
		newObj[number] = number;
	});
	for (const [key, value] of Object.entries(newObj)) {
		checkValue.push(Number.parseInt(key));
	}
	return checkValue;
}
