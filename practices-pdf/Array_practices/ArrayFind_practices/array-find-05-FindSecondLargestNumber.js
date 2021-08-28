export function findSecondLargestNumber(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0 || numberList.length === 1) {
		return undefined;
	}
	numberList.sort();
	return numberList[numberList.length - 2];
}
