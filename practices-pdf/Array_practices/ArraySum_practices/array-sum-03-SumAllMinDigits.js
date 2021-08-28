export function sumAllMinDigits(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	let numberCheck = [];
	let sum = 0;
	const checkValid = numberList.values();
	for (const checkValid of numberList) {
		if (typeof checkValid !== 'number') {
			return 0;
		}
	}
	numberList.forEach((number) => {
		numberCheck.push(number.toString().split(''));
	});
	numberCheck.forEach((number) => {
		number.sort();
		sum += Number.parseInt(number[0]);
	});
	return sum;
}
