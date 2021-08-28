export function findFirstIPhone(productList) {
	if (!Array.isArray(productList) || productList.length === 0) {
		return undefined;
	}
	let checkValue = [];
	productList.forEach((product) => {
		const { name } = product;
		if (name === undefined) {
			return undefined;
		}
		if (name.toLocaleLowerCase().indexOf('iphone') !== -1) {
			checkValue.push(product);
		}
	});
	return checkValue[0];
}
