export function statisticsNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return {};
	}
	let newObj = {};
	for (const value of numberList) {
		if (typeof value !== 'number') {
			return newObj;
		}
	}
	numberList.forEach((number) => {
		if (newObj[number]) {
			newObj[number] += 1;
		} else {
			newObj[number] = 1;
		}
	});
	return newObj;
}
