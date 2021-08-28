export function findMaxSumArray(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	for (const value of numberList) {
		if (typeof value !== 'number') {
			return [];
		}
	}
	let checkIndex = [];
	let checkIndexv2 = [];
	let checkIndexv3 = [];
	let getSumNumber = [];
	for (let i = 1; i < numberList.length; i++) {
		if (numberList[i - 1] >= numberList[i]) {
			checkIndexv2.push(i - 1);
			checkIndexv3.push(i);
			checkIndex.push(i - 1, i);
		}
	}
	if (checkIndex.length === 0 && checkIndexv2.length === 0 && checkIndexv3.length === 0) {
		let sum = 0;
		numberList.forEach((number) => {
			sum += number;
		});
		getSumNumber.push(sum);
	}
	if (checkIndex[0] !== 0 && checkIndex.length >= 2) {
		let sum = 0;
		const getNumber = numberList.slice(0, checkIndex[0] + 1);
		getNumber.filter((number) => {
			sum += number;
		});
		getSumNumber.push(sum);
	}
	for (let x = 2; x < checkIndex.length; x++) {
		console.log(checkIndex[x - 1], checkIndex[x]);
		let sum = 0;
		const index = checkIndexv2.includes(checkIndex[x - 1]);
		const indexv2 = checkIndexv3.includes(checkIndex[x]);

		if (index === false && indexv2 === false) {
			const getNumberv2 = numberList.slice(checkIndex[x - 1], checkIndex[x] + 1);
			getNumberv2.filter((number) => {
				sum += number;
			});
			getSumNumber.push(sum);
		}
	}
	if (checkIndex.length >= 2) {
		let sum = 0;
		const getNumberv3 = numberList.slice(checkIndex[checkIndex.length - 1]);
		getNumberv3.filter((number) => {
			sum += number;
		});
		getSumNumber.push(sum);
	}
	return getSumNumber[getSumNumber.length - 1];
}
