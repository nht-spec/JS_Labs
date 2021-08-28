function calcCartTotal(cartItemList) {
	if (Array.isArray(cartItemList) && cartItemList.length === 0) {
		return 0;
	}
	let initialValue = 0;
	let newArr = [];
	if (Array.isArray(cartItemList)) {
		cartItemList.forEach((item) => {
			let newObj = { price: item.product.price, quantity: item.quantity };
			newArr.push(newObj);
		});
	}
	return newArr.reduce((acc, curr) => acc + curr.price * curr.quantity, initialValue);
}
