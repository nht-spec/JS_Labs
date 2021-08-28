export function fillPath(path, params) {
	if (typeof path !== 'string' || path.length === 0 || Object.entries(params) === 0) {
		return false;
	}
	let newString = '';
	if (params.categoryId !== undefined) {
		newString = path.replace(':categoryId', params.categoryId);
	}
	if (params.productId !== undefined) {
		newString = path.replace(':productId', params.productId);
	}
	if (params.categoryId !== undefined && params.productId !== undefined) {
		newString = path
			.replace(':categoryId', params.categoryId)
			.replace(':productId', params.productId);
	}
	return newString;
}
