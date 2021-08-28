export function sumEvenNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	let checkValue = 0;
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i] > numberList[i - 1] && numberList[i] % 2 === 0) {
			checkValue += numberList[i];
		}
	}
	return checkValue;
}
console.log(sumEvenNumbers([2, 8, 5, 4]));
