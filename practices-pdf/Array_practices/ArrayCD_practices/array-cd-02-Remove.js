export function remove(arr, k, n) {
	if (
		!Array.isArray(arr) ||
		arr.length === 0 ||
		typeof k !== 'number' ||
		typeof n !== 'number'
	) {
		return [];
	}
	let isValid = arr.values();
	for (const isValid of arr) {
		if (typeof isValid !== 'number') {
			return [];
		}
	}
	let index = 0;
	if (k >= arr.length || k < 0) {
		return arr;
	}
	if (n <= 0 || n === undefined) {
		return [];
	}
	arr.findIndex((element, i) => {
		if (i === k) {
			index += i;
		}
	});
	const checkIndex = arr.slice(index);
	const getIndexN = checkIndex.slice(n);
	const checkIndexv2 = arr.slice(0, index);
	const newArr = checkIndexv2.concat(getIndexN);
	return newArr;
}
