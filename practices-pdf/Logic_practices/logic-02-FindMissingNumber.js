export function findMissingNumber(numberList, n) {
	if (
		!Array.isArray(numberList) ||
		numberList.length === 0 ||
		typeof n !== 'number' ||
		n <= 5
	) {
		return 0;
	}
	let checkNumber = 0;
	let lengthofArr = [];
	for (const value of numberList) {
		if (typeof value !== 'number' || value < 5) {
			return checkNumber;
		}
	}
	if (numberList[numberList.length - 1] > n) {
		return checkNumber;
	}
	for (let i = 5; i <= n; i++) {
		const check = numberList.includes(i);
		if (check === false) {
			lengthofArr.push(i);
		}
	}
	if (lengthofArr.length < 2) {
		return lengthofArr[0];
	}
	return checkNumber;
}
