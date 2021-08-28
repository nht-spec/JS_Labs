function countWords(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}
	const newString = str.split(' ').filter((x) => x !== '').length;
	return newString;
}
