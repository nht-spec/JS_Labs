export function statisticsCharacters(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return {};
	}
	let newObj = {};
	str.split('').forEach((character) => {
		const newCharater = character.replace(' ', 'space');
		if (newObj[newCharater]) {
			newObj[newCharater] += 1;
		} else {
			newObj[newCharater] = 1;
		}
	});
	return newObj;
}
console.log(statisticsCharacters('aa vv dd '));
