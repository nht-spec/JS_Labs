const VALUE_CHECK_DOMAIN = ['http://', 'https://', 'ws://', 'wss://'];
const VALUE_CHECK_DOMAINv2 = ['.com', '.vn', '.com.vn'];
export function findLastUrl(strList) {
	if (!Array.isArray(strList) || strList.length === 0) {
		return undefined;
	}
	let newArr = [];
	let checkValue = undefined;
	const iterator = strList.values();
	for (const value of iterator) {
		if (typeof value !== 'string') {
			return checkValue;
		}
	}
	strList.forEach((str) => {
		const value = str.slice(0, str.lastIndexOf('/') + 1);
		const domain = str.slice(str.lastIndexOf('.'));
		const checkLength = str.slice(str.lastIndexOf('/') + 1, str.indexOf('.'));
		const checkValue = VALUE_CHECK_DOMAIN.includes(value);
		const checkDomain = VALUE_CHECK_DOMAINv2.includes(domain);
		if (checkDomain === true && checkValue === true && checkLength.length >= 3) {
			newArr.push(str);
		}
	});
	return newArr[newArr.length - 1];
}
