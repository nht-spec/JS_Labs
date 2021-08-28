import { findMissingNumber } from './logic-02-FindMissingNumber';
describe('findMissingNumber(numberList, n)', () => {
	it('should return 0 when numberList is empty or is not array and n is not number, n <= 5', () => {
		expect(findMissingNumber([], 0)).toEqual(0);
		expect(findMissingNumber({}, {})).toEqual(0);
		expect(findMissingNumber('', '')).toEqual(0);
		expect(findMissingNumber(0, [])).toEqual(0);
	});
	it('should return 0 when numberList is not correct', () => {
		expect(findMissingNumber([1, 2, 3], 4)).toEqual(0);
		expect(findMissingNumber([{ test: 1 }, '12', [1, 2]], 4)).toEqual(0);
		expect(findMissingNumber([5, 6, 7], '2')).toEqual(0);
		// expect(findMissingNumber([5, 8, 10], 7)).toEqual(0);
	});
	it('should return correct number when numberList is correct', () => {
		expect(findMissingNumber([5, 6, 8, 9, 10], 10)).toEqual(7);
		expect(findMissingNumber([5], 6)).toEqual(6);
		expect(findMissingNumber([5, 6, 7, 8, 10, 11], 11)).toEqual(9);
	});
});
