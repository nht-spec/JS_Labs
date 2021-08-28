export function isSubArray(a, b) {
	if (!Array.isArray(a) || !Array.isArray(b) || b.length === 0) {
		return false;
	}
	let checkValue = false;
	let checkIndexv1 = [];
	let checkIndexv2 = [];
	for (const value of a) {
		if (typeof value !== 'number') {
			return checkValue;
		}
	}
	for (const value of b) {
		if (typeof value !== 'number') {
			return checkValue;
		}
	}
	if (a.length === 0) {
		checkValue = true;
	}
	for (let i = 0; i < b.length; i++) {
		if (a.length < 2 && a.includes(b[i]) === true) {
			checkValue = true;
		}
		if (a.includes(b[i]) === true) {
			checkIndexv1.push(i);
			checkIndexv2.push(i + 1);
		}
	}
	checkIndexv2.forEach((index) => {
		if (a.length >= 2 && checkIndexv1.includes(index) === true) {
			checkValue = true;
		}
	});
	return checkValue;
}
