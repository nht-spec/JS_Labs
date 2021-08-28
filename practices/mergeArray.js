function mergeArray(a, b) {
	if (!Array.isArray(a, b) || (a.length === 0 && b.length === 0)) {
		return [];
	}
	let newObj = {};
	let sumArr = [];
	const newArr = a.concat(b);
	newArr.forEach((x) => {
		newObj[x] = newObj[x];
	});
	for (const [key, value] of Object.entries(newObj)) {
		sumArr.push(Number.parseInt(key));
	}
	return sumArr;
}
console.log(mergeArray([1, 2, 3], [2, 3, 4]));
