export function countUniqueNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	const uniqueNumberList = [];
	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number);
	}
	return uniqueNumberList.length;
}

export function countUniqueNumbers2(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return 0;
	}
	const flag = {};
	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		flag[number] = true;
	}
	return Object.keys(flag).length;
}
