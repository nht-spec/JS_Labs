// v1
export function calculateSum(n) {
	if (n <= 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}
// v2
export function calculateSum2(n) {
	if (n <= 0) {
		return 0;
	}
	return (n * (n + 1)) / 2;
}
