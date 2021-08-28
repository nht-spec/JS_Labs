export function getDisplayedAddress(address) {
	if (Object.keys(address).length === 0 || typeof address !== 'object') {
		return false;
	}
	let newArr = [];
	for (const [key, value] of Object.entries(address)) {
		newArr.push(value);
	}
	if (typeof newArr[0] === 'number') {
		return newArr
			.slice(0, 1)
			.toString()
			.concat(' ', newArr.slice(1).toString().split(',').join(', '));
	}
	return newArr.toString().split(',').join(', ');
}
