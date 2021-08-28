export function generatePrimeNumbers(n) {
	if (typeof n !== 'number' || n <= 0 || n >= 1000) {
		return [];
	}
	let checkNumber = {};
	for (let i = 2; i <= n; i++) {
		for (let x = 2; x < i; x++) {
			if (i % x === 1) {
				checkNumber[x] = x;
				break;
			}
		}
	}
	return Object.values(checkNumber);
}
