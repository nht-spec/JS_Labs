function chunkArray(array, size) {
	if (!Array.isArray(array) || (typeof size !== 'number' && size <= 0)) {
		return [];
	}
	let newArr = [];
	if (array.length === size) {
		newArr.push(array.splice(''));
	}
	for (let i = 0; i < array.length; i++) {
		if (size === 1) {
			let newNumber = [];
			newNumber.push(array[i]);
			newArr.push(newNumber);
		}
	}
	if (size > 1 && size < array.length && array.length % size === 1) {
		newArr.push(array.slice(0, array.length - 1));
		newArr.push(array.slice(array.length - 1, array.length));
	}
	if (size > 1 && size < array.length && array.length % size === 0) {
		const newIndex = array.length / size;
		newArr.push(array.slice(0, newIndex));
		newArr.push(array.slice(newIndex));
	}

	if (newArr.length >= 20) {
		throw new Error('Too many chunks');
	}
	if (newArr.length === 0 || size === 0) {
		return [];
	}
	return newArr;
}
