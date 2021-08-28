export function countUniqueNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	let checkNumber = {};
	numberList.forEach((number) => {
		if (typeof number === 'number') {
			checkNumber[number] = 1;
		}
	});
	return Object.keys(checkNumber).length;
}
