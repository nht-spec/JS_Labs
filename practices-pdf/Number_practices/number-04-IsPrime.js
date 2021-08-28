export function isPrime(n) {
	if (typeof n !== 'number' || n <= 0 || n > 1000000) {
		return false;
	}
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
