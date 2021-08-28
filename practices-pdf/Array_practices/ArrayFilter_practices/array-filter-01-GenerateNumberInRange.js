export function generateNumberInRange(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number' || (a, b) < 0) {
		return [];
	}
	let checkValue = [];
	if (a > b) {
		return checkValue;
	}
	for (let i = a; i <= b; i++) {
		checkValue.push(i);
	}
	return checkValue;
}
