export function findLastPerfectSquare(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return undefined;
	}
	let sum = 0;
	let newArr = [];
	numberList.forEach((number) => {
		if (Number.isInteger(Math.sqrt(number))) {
			newArr.push(number);
		}
	});
	sum = newArr[newArr.length - 1];
	return sum;
}
