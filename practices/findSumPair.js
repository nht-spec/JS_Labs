function findSumPair(numberList, targetSum) {
	if (!Array.isArray(numberList) || numberList.length === 0 || targetSum <= 0) {
		return [];
	}
	let newArr = [];
	for (let i = 1; i < numberList.length; i++) {
		const sum = numberList[0] + numberList[i];
		const sum2 = numberList[i] + numberList[i - 1];
		const sum3 = numberList[i - 1] + numberList[numberList.length - 1];
		if (sum === targetSum) {
			newArr.push(numberList[0], numberList[i]);
			break;
		}
		if (sum2 === targetSum) {
			newArr.push(numberList[i], numberList[i - 1]);
			break;
		}
		if (sum3 === targetSum) {
			newArr.push(numberList[i - 1], numberList[numberList.length - 1]);
		}
	}
	return newArr.sort();
}
