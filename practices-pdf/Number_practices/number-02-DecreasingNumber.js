export function isDecreasingNumber(n) {
	if (typeof n !== 'number' || n <= 0 || n > 1000000) {
		return false;
	}
	const newNumber = n.toString().split('');
	for (let i = 1; i < newNumber.length; i++) {
		if (newNumber[i - 1] <= newNumber[i]) {
			return false;
		}
	}
	return true;
}
