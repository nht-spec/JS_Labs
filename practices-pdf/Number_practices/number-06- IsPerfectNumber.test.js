import { isPerfectNumber } from './number-06- IsPerfectNumber';
describe('isPerfectNumber(n)', () => {
	test('should return false when n < 1 & n > 1000', () => {
		expect(isPerfectNumber(-1)).toBe(false);
		expect(isPerfectNumber(0)).toBe(false);
		expect(isPerfectNumber(1000)).toBe(false);
		expect(isPerfectNumber([])).toBe(false);
		expect(isPerfectNumber({})).toBe(false);
		expect(isPerfectNumber('')).toBe(false);
	});
	test('should return false when n is not a perfect number', () => {
		[2, 3, 4, 5, 7, 8, 12, 13, 27, 29, 30, 495, 8127].forEach((x) => {
			expect(isPerfectNumber(x)).toBe(false);
		});
	});
	test('should return true when n is a perfect number', () => {
		[6, 28, 496].forEach((x) => {
			expect(isPerfectNumber(x)).toBe(true);
		});
	});
});
