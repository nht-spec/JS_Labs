export function hasEasyFrontend(wordList) {
	if (!Array.isArray(wordList) || wordList.length === 0) {
		return false;
	}
	const checkValue = wordList.toString().split(',');
	if (
		(checkValue.includes('easy') && checkValue.includes('frontend')) ||
		checkValue.includes('easy frontend')
	) {
		return true;
	}
	return false;
}
console.log(hasEasyFrontend(['easy frontend', 'easy', 'frontend']));
