function uniqueLetters(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return '';
	}
	let newObj = {};
	let newString = '';
	const newArr = str
		.split('')
		.filter((x) => x !== '')
		.forEach((word) => {
			if (newObj[word]) {
				newObj[word] -= word;
			} else {
				newObj[word] = 1;
			}
		});
	for (const [key, value] of Object.entries(newObj)) {
		if (value === 1) {
			newString += key;
		}
	}
	return newString;
}

console.log(uniqueLetters('abc'));
