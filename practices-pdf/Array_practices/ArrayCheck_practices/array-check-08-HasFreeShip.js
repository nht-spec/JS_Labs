export function hasFreeShip(productList, price) {
	if (
		!Array.isArray(productList) ||
		productList.length === 0 ||
		typeof price !== 'number' ||
		price <= 0
	) {
		return false;
	}
	let checkPrice = false;
	let checkProduct = false;
	productList.forEach((product) => {
		const productPrice = product.price;
		if (product.isFreeShip === true) {
			checkProduct = true;
		}
		if (price < productPrice) {
			checkPrice = true;
		}
	});
	if (checkProduct === true && checkPrice === true) {
		return true;
	}
	return false;
}
