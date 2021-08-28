import { isIncreasingNumber } from './number-01';

describe('isIncreasingNumber', () => {
	test('should return false when n <0 and n >1000000 or n != 1', () => {
		Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
			expect(isIncreasingNumber(x)).toBe(false);
		});
	});

	test('should return false when numberleft < numberRight', () => {
		[11, 222, 333, 4444, 55555, 666666, 21, 312, 7831, 76872, 121212].forEach((x) => {
			expect(isIncreasingNumber(x)).toBe(false);
		});
	});
	test('should return true when numberleft > numberRight', () => {
		[12, 123, 1234, 34568, 246789].forEach((x) => {
			expect(isIncreasingNumber(x)).toBe(true);
		});
	});
});
