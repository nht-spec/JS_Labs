export function countNumbersNotInB(a, b) {
	if (!Array.isArray(a, b) || a.length === 0 || b.length === 0) {
		return 0;
	}
	let checkValue = [];
	a.forEach((number) => {
		if (typeof number === 'number' && b.indexOf(number) === -1) {
			checkValue.push(number);
		}
	});
	return checkValue.length;
}
