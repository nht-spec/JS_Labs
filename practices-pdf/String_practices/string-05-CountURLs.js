const CHECK_PROTOCOL_URLs = ['https', 'http', 'ws', 'wss'];
export function countURLs(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}
	let newWords = [];
	let sum = 0;
	const newString = str.split(' ').forEach((x) => {
		const words = x.lastIndexOf('://');
		const checkWord = x.split(':');
		if (CHECK_PROTOCOL_URLs.includes(checkWord[0]) === true && words !== -1) {
			newWords.push(x);
		}
	});
	newWords.forEach((words) => {
		const newWords = words.split('://');
		const sumWords = newWords[1].split('.com');
		if (sumWords[0].length >= 3) {
			sum += 1;
		}
	});
	return sum;
}
