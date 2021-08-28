export function isIncreasingNumberByDistance(n, x) {
	if (
		typeof n !== 'number' ||
		typeof n !== 'number' ||
		x >= 5 ||
		(n, x) <= 0 ||
		(n, x) > 1000000
	) {
		return false;
	}
	const number = n.toString().split('');
	for (let i = 1; i < number.length; i++) {
		const newNumber = Number.parseInt(number[i - 1]) + x;
		if (newNumber == number[i]) {
			return true;
		}
	}
	return false;
}
