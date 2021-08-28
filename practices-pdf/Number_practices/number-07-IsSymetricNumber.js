export function isSymetricNumber(n) {
	if (typeof n !== 'number' || n < 1 || n >= 1000000) {
		return false;
	}
	const number = n.toString().split('');
	let sumNumber = 0;
	let sumNumber2 = 0;
	for (let i = 1; i < number.length; i++) {
		if (number.length === 2 && number[i - 1] === number[i]) {
			return true;
		}
		const newNumber = Number.parseInt(number[i]);
		const newNumber2 = Number.parseInt(number[i - 1]);
		sumNumber += newNumber;
		sumNumber2 += newNumber2;
	}
	if (sumNumber2 === sumNumber) {
		return true;
	}
	return false;
}
