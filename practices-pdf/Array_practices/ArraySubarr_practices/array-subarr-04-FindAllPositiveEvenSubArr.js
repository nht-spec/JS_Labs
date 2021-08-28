export function findAllPositiveEvenSubArr(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) {
		return [];
	}
	let checkIndex = [];
	let indexEven = [];
	let evenNumber = [];
	let evenNumberV2 = [];
	let evenValue = [];
	let sumEven = [];
	for (const [index, element] of numberList.entries()) {
		if (typeof element !== 'number') {
			return sumEven;
		}

		if (typeof element === 'number' && element > 0 && element % 2 === 0) {
			checkIndex.push(index);
			evenValue.push(element);
		}
	}
	for (let i = 1; i < checkIndex.length; i++) {
		if ((checkIndex[i - 1] + 1 === checkIndex[i]) === false) {
			indexEven.push(checkIndex[i - 1], checkIndex[i]);
			evenNumber.push(checkIndex[i - 1]);
			evenNumberV2.push(checkIndex[i]);
		}
	}
	const getEven = numberList.slice(checkIndex[0], indexEven[0] + 1);
	if (getEven.length > 0) {
		sumEven.push(getEven);
	}
	for (let x = 2; x < indexEven.length; x++) {
		const checkEven = evenNumber.includes(indexEven[x - 1]);
		const checkEvenv2 = evenNumberV2.includes(indexEven[x]);
		if (indexEven.length > 0) {
			if (checkEven === false && checkEvenv2 === false) {
				const getEvenv2 = numberList.slice(indexEven[x - 1], indexEven[x] + 1);
				sumEven.push(getEvenv2);
			}
		}
	}
	const getEvenv3 = numberList.slice(
		indexEven[indexEven.length - 1],
		checkIndex[checkIndex.length - 1] + 1
	);
	if (getEvenv3.length > 0) {
		sumEven.push(getEvenv3);
	}
	if (indexEven.length === 0 && evenValue.length !== 0) {
		sumEven.push(evenValue);
	}
	return sumEven;
}
