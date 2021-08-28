const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

function getLanguageCodeFromURL(url) {
	if (typeof url !== 'string' || url.length === 0) {
		return DEFAULT_LANGUAGE;
	}
	let newWord = url.split('.com/');
	let newString = '';
	for (let i = 0; i < SUPPORTED_LANGUAGE_LIST.length; i++) {
		if (newWord[1] === SUPPORTED_LANGUAGE_LIST[i]) {
			newString = newWord[1];
		}
	}
	if (url.indexOf('/vi/') !== -1) {
		newString = 'vi';
	}
	if (url.indexOf('/cn/') !== -1) {
		newString = 'cn';
	}
	if (url.indexOf('/en/') !== -1) {
		newString = 'en';
	}
	if (newString.length === 0) {
		return DEFAULT_LANGUAGE;
	}
	return newString;
}
