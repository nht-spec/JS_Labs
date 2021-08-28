import { hasFibonaciNumber } from './array-check-12-HasFibonaciNumber';
describe(' hasFibonaciNumber(numberList)', () => {
	it('should return false when numberList is empty or is not array', () => {
		expect(hasFibonaciNumber([])).toBe(false);
		expect(hasFibonaciNumber({})).toBe(false);
		expect(hasFibonaciNumber('')).toBe(false);
		expect(hasFibonaciNumber(0)).toBe(false);
		expect(hasFibonaciNumber(100)).toBe(false);
	});
	it('should return false when numberList is not fibonaci number and > 100', () => {
		expect(hasFibonaciNumber([4, 6, 7])).toBe(false);
		expect(hasFibonaciNumber([100])).toBe(false);
		expect(hasFibonaciNumber([90])).toBe(false);
	});
	it('should return true when numberList is fibonaci number and < 100', () => {
		expect(hasFibonaciNumber([0, 1, 2, 3, 4, 5])).toBe(true);
		expect(hasFibonaciNumber([89])).toBe(true);
		expect(hasFibonaciNumber([2])).toBe(true);
		expect(hasFibonaciNumber([3])).toBe(true);
		expect(hasFibonaciNumber([5])).toBe(true);
		expect(hasFibonaciNumber([13])).toBe(true);
	});
});
