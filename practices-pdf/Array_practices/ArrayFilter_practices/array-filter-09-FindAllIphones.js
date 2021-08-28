export function findAllIphones(productList) {
	if (!Array.isArray(productList) || productList.length === 0) {
		return [];
	}
	let checkValue = [];
	productList.forEach((product) => {
		const { name, amount } = product;
		const checkName = name.toLocaleLowerCase().toString();
		if (checkName.includes('iphone') === true && amount > 0) {
			checkValue.push(product);
		}
	});
	return checkValue;
}
