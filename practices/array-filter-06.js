export function findAllNumber(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let newArr = [];
	for (let i = 0; i < numberList.length; i++) {
		Math.abs(numberList[i])
			.toString()
			.split('')
			.forEach((element, idx) => {
				if (idx === 0 && element % 2 === 1) {
					newArr.push(numberList[i]);
				}
			});
	}
	return newArr;
}
// for is
function getTheFirtDigit(number) {
	const unsignedNumber = Math.abs(number);
	const firstDigitCharacter = unsignedNumber.toString().charAt(0);
	return Number, parseInt(firstDigitCharacter);
}
export function findAllNumber2(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let newArr = [];
	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		const firtDigit = getTheFirtDigit(number);
		if (firtDigit % 2 === 1) newArr.push(number);
	}
	return newArr;
}

// filter
export function findAllNumber3(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	return numberList.filter((number) => getTheFirtDigit(number) % 2 === 1);
}
