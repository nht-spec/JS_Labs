export function isIncreasingNumber(n) {
	if (n <= 9 || n > 1000000) {
		return false;
	}
	const number = n.toString();
	for (let i = 1; i < number.length; i++) {
		if (number[i] <= number[i - 1]) {
			return false;
		}
	}
	return true;
}
console.log(isIncreasingNumber(12));
