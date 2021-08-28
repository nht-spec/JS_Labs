export function findLongestWord(wordList) {
	if (!Array.isArray(wordList) || wordList.length === 0) {
		return '';
	}
	let checkValue = '';
	let newArr = [];
	for (let i = 0; i < wordList.length; i++) {
		const checkString = typeof wordList[i] === 'string';
		const checkSpace = wordList[i].toString().split('').indexOf(' ') === -1;
		if (checkString === false) {
			checkValue = '';
		}
		if (wordList[i].length <= 5 && checkSpace === true && wordList[i] !== '') {
			newArr.push(wordList[i]);
		}
	}
	if (newArr.length === 0) {
		checkValue = '';
	}
	if (newArr.length !== 0) {
		const finalValue = newArr.sort();
		checkValue = finalValue[finalValue.length - 1];
	}
	return checkValue;
}
