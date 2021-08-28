export function hasTwoDigitsWithSum(n, sum) {
	if (
		(typeof n !== 'number') | (typeof sum !== 'number') ||
		(n, sum) <= 0 ||
		sum >= 19 ||
		n >= 1000000
	) {
		return false;
	}
	const number = n.toString().split('');
	for (let i = 1; i < number.length; i++) {
		const number1 = Number.parseInt(number[i]);
		const number2 = Number.parseInt(number[i - 1]);
		if (number1 + number2 === sum) {
			return true;
		}
	}
	const checkSum = Number.parseInt(number[0]) + Number.parseInt(number[number.length - 1]);
	if (checkSum === sum) {
		return true;
	}
	return false;
}
console.log(hasTwoDigitsWithSum(101, 2));
