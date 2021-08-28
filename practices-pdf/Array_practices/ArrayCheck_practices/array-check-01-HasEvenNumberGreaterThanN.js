export function hasEvenNumberGreaterThanNv2(numberList, n) {
	if (!Array.isArray(numberList) || n < 0 || typeof n !== 'number') {
		return false;
	}
	let newValue = 0;
	numberList
		.filter((number) => {
			if (number % 2 !== 1 && number > n) {
				return number;
			}
		})
		.forEach((x) => {
			newValue += x;
		});
	if (newValue > 0) {
		return true;
	}
	return false;
}
export function hasEvenNumberGreaterThanN(numberList, n) {
	if (!Array.isArray(numberList) || n < 0 || typeof n !== 'number') {
		return false;
	}
	let value = 0;
	numberList.forEach((number) => {
		const newNumber = number % 2;
		if (newNumber === 0 && number > n) {
			value += number;
		}
	});
	if (value > 0) {
		return true;
	}
	return false;
}
