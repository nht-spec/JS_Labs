export function insert(arr, newItem, k) {
	if (
		!Array.isArray(arr) ||
		arr.length === 0 ||
		typeof newItem !== 'number' ||
		typeof k !== 'number'
	) {
		return [];
	}
	const isValid = arr.values();
	let checkValue = [];
	const changeArr = arr.toString();
	const checkLength = newItem.toString().length;
	const sumLength = changeArr.length + checkLength;
	for (const isValid of arr) {
		if (typeof isValid !== 'number') {
			return checkValue;
		}
	}
	if (k <= 0) {
		const newValue = changeArr.padStart(sumLength + 1, `${newItem},`);
		newValue.split(',').forEach((x) => checkValue.push(Number.parseInt(x)));
	}
	if (checkValue.length === 0 && k > arr.length) {
		arr.push(newItem);
		return arr;
	}
	return checkValue;
}
