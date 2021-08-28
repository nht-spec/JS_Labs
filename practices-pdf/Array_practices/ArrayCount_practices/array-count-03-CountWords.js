export function countWords(wordList, n) {
	if (!Array.isArray(wordList) || wordList.length === 0 || typeof n !== 'number' || n < 0) {
		return 0;
	}
	let checkValue = [];
	wordList.forEach((word) => {
		if (word.length >= n) {
			checkValue.push(word);
		}
	});
	return checkValue.length;
}
console.log(countWords(['easy', 'frontend'], 4));
