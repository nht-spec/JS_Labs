export function findMostFrequentNumber(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	for (const value of numberList) {
		if (typeof value !== 'number') {
			return 0;
		}
	}
	let checkValue = [];
	let newObj = {};
	numberList.forEach((number) => {
		if (newObj[number]) {
			newObj[number] += 1;
		} else {
			newObj[number] = 1;
		}
	});
	for (const [key, value] of Object.entries(newObj)) {
		if (value > 1) {
			checkValue.push(Number.parseInt(key));
		}
	}
	if (checkValue.length === 0) {
		return numberList[0];
	}
	return checkValue[0];
}
