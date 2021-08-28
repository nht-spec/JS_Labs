import { isSymetricNumber } from './number-07-IsSymetricNumber';
describe(' isSymetricNumber(n)', () => {
	test('should return false when n < 1 & n >= 1000000', () => {
		expect(isSymetricNumber(-1)).toBe(false);
		expect(isSymetricNumber(0)).toBe(false);
		expect(isSymetricNumber([])).toBe(false);
		expect(isSymetricNumber({})).toBe(false);
		expect(isSymetricNumber('')).toBe(false);
		expect(isSymetricNumber(1000000)).toBe(false);
	});
	test('should return false when n dont has symetric number', () => {
		[10, 100, 122, 132, 12, 13, 14, 12322, 12424].forEach((x) => {
			expect(isSymetricNumber(x)).toBe(false);
		});
	});
	test('should return true when n has symetric number', () => {
		[11, 121, 12321, 13231, 232, 323, 45554, 67876, 999999].forEach((x) => {
			expect(isSymetricNumber(x)).toBe(true);
		});
	});
});
