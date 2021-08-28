export function insert(numberList, newNumber) {
	if (!Array.isArray(numberList) || typeof newNumber !== 'number') {
		return [];
	}
	if (typeof newNumber === 'number') {
		numberList.push(newNumber);
	}
	return numberList.sort();
}
