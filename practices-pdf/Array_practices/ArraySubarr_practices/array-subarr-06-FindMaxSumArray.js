export function findMaxSumArray(numberList) {
	let checkIndex = [];
	let index = [];
	let indexV2 = [];
	let checkSum = 0;
	let checkValue = [];
	let sum = 0;
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	for (const value of numberList) {
		if (typeof value !== 'number') {
			return [];
		}
	}
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] >= numberList[i]) {
			checkIndex.push(i - 1, i);
			index.push(i - 1);
			indexV2.push(i);
		}
	}
	if (checkIndex[0] !== 0) {
		let sum = 0;
		const checkNumber = numberList.slice(0, checkIndex[0] + 1);
		checkNumber.filter((number) => {
			sum += number;
			if (sum > checkSum) {
				checkSum = sum;
				checkValue = checkNumber;
			}
		});
	}
	for (let x = 2; x < checkIndex.length; x++) {
		const getIndex = index.includes(checkIndex[x - 1]);
		const getIndexV2 = indexV2.includes(checkIndex[x]);
		if (getIndex === false && getIndexV2 === false) {
			let sum = 0;
			const checkNumberV2 = numberList.slice(checkIndex[x - 1], checkIndex[x] + 1);
			checkNumberV2.filter((number) => {
				sum += number;
				if (sum >= checkSum) {
					checkSum = sum;
					checkValue = checkNumberV2;
				}
			});
		}
	}
	const checkNumberV3 = numberList.slice(indexV2[indexV2.length - 1]);
	checkNumberV3.filter((number) => {
		sum += number;
		if (sum > checkSum) {
			checkSum = sum;
			checkValue = checkNumberV3;
		}
	});
	if (checkIndex.length === 0 && index.length === 0 && indexV2.length === 0) {
		return numberList;
	}
	if (checkValue.length >= 2) {
		return checkValue;
	}
	return [];
}
