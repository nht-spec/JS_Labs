export function statisticsWords(str) {
	if (str === '') return {};
	const statistics = {};
	str.split(' ')
		.filter((x) => x !== '')
		.forEach((word) => {
			if (statistics[word]) {
				statistics[word] += 1;
			} else {
				statistics[word] = 1;
			}
		});
	return statistics;
}

export function statisticsWords2(str) {
	if (str === '') return {};
	return str
		.split(' ')
		.filter((x) => x !== '')
		.reduce((statistics, word) => {
			statistics[word] = statistics[word] !== undefined ? statistics[word] + 1 : 1;
			return statistics;
		}, {});
}
