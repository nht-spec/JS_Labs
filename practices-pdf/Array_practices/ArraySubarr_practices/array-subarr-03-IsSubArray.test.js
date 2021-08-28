import { isSubArray } from './array-subarr-03-IsSubArray';
describe('isSubArray(a, b)', () => {
	it('should return false when a,b is empty or is not array', () => {
		expect(isSubArray([], [])).toEqual(false);
		expect(isSubArray({}, {})).toEqual(false);
		expect(isSubArray('', '')).toEqual(false);
		expect(isSubArray(0, 0)).toEqual(false);
	});
	it('should return false when a,b is not correct', () => {
		expect(isSubArray([1, 2], [2, 3, 4])).toEqual(false);
		expect(isSubArray([2, 4], [2, 3, 4])).toEqual(false);
		expect(isSubArray([2, 4], [])).toEqual(false);
		expect(isSubArray([{ test: 1 }, '1', [12]], [1])).toEqual(false);
		expect(isSubArray([{ test: 1 }, '1', [12]], [{ test: 1 }, '1', [12]])).toEqual(false);
		expect(isSubArray([2, 3, 4], [{ test: 1 }, '1', [12]])).toEqual(false);
	});
	it('should return true when a,b is correct', () => {
		expect(isSubArray([], [2, 3, 4])).toEqual(true);
		expect(isSubArray([1], [1, 2, 3])).toEqual(true);
		expect(isSubArray([1, 2], [1, 2, 3])).toEqual(true);
	});
});
