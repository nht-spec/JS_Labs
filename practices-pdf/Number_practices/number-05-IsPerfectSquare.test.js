import { isPerfectSquare } from './number-05-IsPerfectSquare';
describe('isPerfectSquare(n)', () => {
	test('should return false when n <= 0 & n > 1000000 ', () => {
		expect(isPerfectSquare(-1)).toBe(false);
		expect(isPerfectSquare(0)).toBe(false);
		expect(isPerfectSquare()).toBe(false);
		expect(isPerfectSquare([])).toBe(false);
		expect(isPerfectSquare({})).toBe(false);
		expect(isPerfectSquare(1000000)).toBe(false);
	});
	test('should return false when n is not perfectSquare', () => {
		[-1, 2, 3, 5, 35, 26].forEach((x) => {
			expect(isPerfectSquare(x)).toBe(false);
		});
	});
	test('should return true when n is perfectSquare', () => {
		[4, 9, 25, 36].forEach((x) => {
			expect(isPerfectSquare(x)).toBe(true);
		});
	});
});
