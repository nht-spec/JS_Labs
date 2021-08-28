export function sumAllDigits(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	let checkValue = 0;
	const value = numberList.values();
	for (const value of numberList) {
		if (typeof value !== 'number') {
			return checkValue;
		}
	}
	numberList
		.toString()
		.split('')
		.filter((x) => x !== ',')
		.forEach((x) => {
			checkValue += Number.parseInt(x);
		});
	return checkValue;
}
