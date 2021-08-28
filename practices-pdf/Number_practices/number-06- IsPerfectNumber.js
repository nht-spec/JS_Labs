export function isPerfectNumber(n) {
	if (typeof n !== 'number' || n < 1 || n >= 1000) {
		return false;
	}
	let sum = 0;
	for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}
	if (sum === n) {
		return true;
	}
	return false;
}
