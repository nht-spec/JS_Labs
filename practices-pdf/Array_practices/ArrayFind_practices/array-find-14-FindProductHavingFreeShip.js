export function findProductHavingFreeShip(productList) {
	if (!Array.isArray(productList) || productList.length === 0) {
		return undefined;
	}
	let checkValue = [];
	productList.forEach((product) => {
		const { isFreeShip } = product;
		if (isFreeShip === true) {
			checkValue.push(product);
		}
	});
	return checkValue[0];
}
