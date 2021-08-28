export function isPerfectSquare(n) {
	if (typeof n !== 'number' || n <= 0 || n >= 1000000) {
		return false;
	}
	const checkSquare = Math.sqrt(n);
	if (Number.isInteger(checkSquare)) {
		return true;
	}
	return false;
}
