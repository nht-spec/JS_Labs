export function isDivisibleBy10(n) {
	if (typeof n !== 'number' || n <= 0 || n >= 1000000) {
		return false;
	}
	let sum = 0;
	const number = n.toString().split('');
	number.forEach((value) => {
		sum += Number.parseInt(value);
	});
	if (sum % 10 === 0) {
		return true;
	}
	return false;
}
