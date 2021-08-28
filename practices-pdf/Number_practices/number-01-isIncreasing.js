export function isIncreasingNumber(n) {
	if (typeof n !== 'number' || n <= 0 || n > 1000000) {
		return false;
	}
	const number = n.toString().split('');
	for (let i = 1; i < number.length; i++) {
		if (number[i - 1] >= number[i]) {
			return false;
		}
	}
	return true;
}
console.log(isIncreasingNumber(1234567));
