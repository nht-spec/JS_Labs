export function countEmails(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}
	let newNumber = 0;
	const newWords = str
		.split(' ')
		.filter((x) => x.includes('@') === true)
		.forEach((x) => {
			const newString = x.split('@');
			if (newString[0].length >= 3 && newString[1].length >= 3) {
				newNumber += 1;
			}
		});

	return newNumber;
}
