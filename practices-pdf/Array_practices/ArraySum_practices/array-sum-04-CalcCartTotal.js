export function calcCartTotal(cartItemList) {
	if (!Array.isArray(cartItemList) || cartItemList.length === 0) {
		return 0;
	}
	let sum = 0;
	let newArr = [];
	cartItemList.forEach((cart) => {
		const { quantity } = cart;
		const { price } = cart.product;
		if ((price === undefined) === true) {
			return sum;
		}
		if ((quantity !== undefined) === true) {
			newArr.push(cart);
		}
	});
	sum += newArr.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.quantity * currentValue.product.price,
		0
	);
	return sum;
}
