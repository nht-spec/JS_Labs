export function hasFibonaciNumber(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0 || numberList.length > 100) {
		return false;
	}
	let checkValue = false;
	let newArr = [0];
	let sum = 1;
	newArr.push(sum);
	for (let i = 0; i <= newArr.length; i++) {
		if (newArr.length < 12) {
			let checkNumber = newArr[newArr.length - 2] + newArr[newArr.length - 1];
			newArr.push(checkNumber);
		}
	}
	newArr.forEach((number) => {
		if (numberList.includes(number) === true) {
			checkValue = true;
		}
	});
	return checkValue;
}
