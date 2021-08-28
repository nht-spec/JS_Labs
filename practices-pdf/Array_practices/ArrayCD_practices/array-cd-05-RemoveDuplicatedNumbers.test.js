import { removeDuplicatedNumbers } from './array-cd-05-RemoveDuplicatedNumbers';
describe('removeDuplicatedNumbers(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(removeDuplicatedNumbers([])).toEqual([]);
		expect(removeDuplicatedNumbers({})).toEqual([]);
		expect(removeDuplicatedNumbers('')).toEqual([]);
		expect(removeDuplicatedNumbers(0)).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(removeDuplicatedNumbers([{ value: 1 }, '123', [23]])).toEqual([]);
		expect(removeDuplicatedNumbers([false, '123', [23]])).toEqual([]);
		expect(removeDuplicatedNumbers([undefined, null])).toEqual([]);
	});
	it('should return correct value when numberList is correct', () => {
		expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
		expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
		expect(removeDuplicatedNumbers([1, 1, 4])).toEqual([4]);
	});
});
