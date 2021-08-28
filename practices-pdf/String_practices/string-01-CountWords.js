export function countWords(str) {
	if (typeof str !== 'string' || str.length === 0 || str === ' ') {
		return 0;
	}
	const word = str.split(' ').filter((x) => x !== '').length;
	return word;
}
