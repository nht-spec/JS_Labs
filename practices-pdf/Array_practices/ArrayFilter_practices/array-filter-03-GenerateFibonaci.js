export function generateFibonaci(n) {
	if (typeof n !== 'number' || n <= 0 || n >= 1000) {
		return [];
	}
	let checkValue = [0];
	let sum = 1;
	checkValue.push(sum);
	for (let i = 0; i <= checkValue.length; i++) {
		let checkNumber =
			checkValue[checkValue.length - 2] + checkValue[checkValue.length - 1];
		if (checkNumber < n) {
			checkValue.push(checkNumber);
		}
	}
	return checkValue;
}
