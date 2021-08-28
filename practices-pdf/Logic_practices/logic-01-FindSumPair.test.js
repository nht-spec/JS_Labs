import { findSumPair } from './logic-01-FindSumPair';
describe('findSumPair(numberList, targetSum)', () => {
	it('should return [] when numberList is empty or is not array and targetSum is not number', () => {
		expect(findSumPair([], 10)).toEqual([]);
		expect(findSumPair('', {})).toEqual([]);
		expect(findSumPair({}, [])).toEqual([]);
		expect(findSumPair([], '')).toEqual([]);
		expect(findSumPair(0, '')).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(findSumPair([], 10)).toEqual([]);
		expect(findSumPair([1, 2], 2)).toEqual([]);
		expect(findSumPair([1, 2], '2')).toEqual([]);
		expect(findSumPair([{ test: 1 }, '12', [12]], 2)).toEqual([]);
	});
	it('should return correct value when numberList is correct', () => {
		expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
		expect(findSumPair([3, 2, 1], 4)).toEqual([1, 3]);
		expect(findSumPair([3, 2, 1], 3)).toEqual([1, 2]);
		expect(findSumPair([-1, 2, -3], -4)).toEqual([-1, -3]);
	});
});
