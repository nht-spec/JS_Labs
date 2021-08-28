export function findProductByCode(productList, code) {
	if (!Array.isArray(productList) || productList.length === 0 || typeof code !== 'string') {
		return -1;
	}
	let checkIndex = -1;
	productList.forEach((product, index) => {
		const checkProduct = product.code;
		if (checkProduct === code) {
			checkIndex = index;
		}
	});
	return checkIndex;
}
