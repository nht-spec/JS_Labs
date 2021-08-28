export function statisticsWords(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return false;
	}
	let newObj = {};
	str.split(' ')
		.filter((x) => x !== '')
		.forEach((word) => {
			if (newObj[word]) {
				newObj[word] += 1;
			} else {
				newObj[word] = 1;
			}
		});
	return newObj;
}
