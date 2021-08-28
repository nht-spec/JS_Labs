export function hasTruthy(arr) {
	if (!Array.isArray(arr) || arr.length === 0) {
		return false;
	}
	let checkValue = false;
	arr.forEach((x) => {
		if (Boolean(x) === true) {
			checkValue = true;
		}
	});
	return checkValue;
}
