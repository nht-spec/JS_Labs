function mostFrequent(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return undefined;
	}
	let newObj = {};
	let newArr = [];
	let sumNumber = 0;
	let sumKey = 0;
	numberList.forEach((x) => {
		if (newObj[x]) {
			newObj[x] += 1;
		} else {
			newObj[x] = 1;
		}
	});
	for (const [key, value] of Object.entries(newObj)) {
		newArr.push(value);
	}
	sumNumber += Math.max(...newArr);
	for (const [key, value] of Object.entries(newObj)) {
		if (sumNumber === 1) {
			sumKey = 0;
		}
		if (sumNumber !== 1 && sumNumber === value) {
			sumKey = key;
		}
	}
	if (sumKey === 0) {
		return numberList[0];
	}
	return Number.parseInt(sumKey);
}
