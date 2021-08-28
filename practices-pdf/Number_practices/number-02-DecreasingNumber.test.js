import { isDecreasingNumber } from './number-02-DecreasingNumber';
describe(' isDecreasingNumber(n)', () => {
	test('should return false when n <=0 & n > 1000000 ', () => {
		expect(isDecreasingNumber(-1)).toBe(false);
		expect(isDecreasingNumber(1000001)).toBe(false);
		expect(isDecreasingNumber({})).toBe(false);
		expect(isDecreasingNumber([])).toBe(false);
		expect(isDecreasingNumber()).toBe(false);
	});
	test('should return false when n is not a decreasing number ', () => {
		expect(isDecreasingNumber(11)).toBe(false);
		expect(isDecreasingNumber(3212)).toBe(false);
		expect(isDecreasingNumber(12321)).toBe(false);
		expect(isDecreasingNumber(543212)).toBe(false);
	});
	test('should return true when n is a decreasing number ', () => {
		expect(isDecreasingNumber(21)).toBe(true);
		expect(isDecreasingNumber(321)).toBe(true);
		expect(isDecreasingNumber(4321)).toBe(true);
		expect(isDecreasingNumber(54321)).toBe(true);
	});
});
