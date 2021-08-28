export function findFirstPositiveEven(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return undefined;
	}
	let checkValue = undefined;
	let newArr = [];
	for (let i = 0; i < numberList.length; i++) {
		if (numberList[i] <= 0 || numberList % 2 === 1) {
			checkValue = undefined;
		}
		if (numberList[i] > 0 && numberList[i] % 2 === 0) {
			newArr.push(numberList[i]);
		}
	}
	if (newArr.length === 0) {
		return checkValue;
	}
	return newArr[0];
}
console.log(findFirstPositiveEven([1, -10, 1]));
