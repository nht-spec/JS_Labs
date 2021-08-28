export function findFirstEmail(strList) {
	if (!Array.isArray(strList) || strList.length === 0) {
		return undefined;
	}
	let strCheck = '';
	let checkValue = undefined;
	strList
		.filter((x) => typeof x === 'string' && x.indexOf('@') !== -1)
		.forEach((str) => {
			const checkBefore = str.slice(0, str.indexOf('@'));
			const checkAfter = str.slice(str.indexOf('@') + 1, str.indexOf('.'));
			if (checkBefore.length >= 3 && checkAfter.length >= 3) {
				strCheck = str;
			}
		});
	if (strCheck.length === 0) {
		return checkValue;
	}
	if (strCheck.includes('.com') === true || strCheck.includes('.vn') === true) {
		return strCheck;
	}
}
console.log(findFirstEmail(['ab@easy.com']));
