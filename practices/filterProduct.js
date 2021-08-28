const VALUE_100 = 100000;
function filterProducts(productList) {
	if (!Array.isArray(productList) || productList.length === 0) {
		return [];
	}
	let newArr = [];
	productList.forEach((products) => {
		if (products.price > VALUE_100) {
			newArr.push(products);
		}
	});
	return newArr;
}
