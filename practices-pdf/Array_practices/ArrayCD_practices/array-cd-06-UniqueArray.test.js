import { uniqueArray } from './array-cd-06-UniqueArray';
describe(' uniqueArray(numberList)', () => {
	it('should return [] when numberList is empty or is not array', () => {
		expect(uniqueArray([])).toEqual([]);
		expect(uniqueArray({})).toEqual([]);
		expect(uniqueArray('')).toEqual([]);
		expect(uniqueArray(0)).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(uniqueArray(['123', [2], { key: 1 }])).toEqual([]);
		expect(uniqueArray([true, [2], { key: 1 }])).toEqual([]);
		expect(uniqueArray(['123', undefined, { key: 1 }])).toEqual([]);
	});
	it('should return correct value when numberList is correct', () => {
		expect(uniqueArray([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
		expect(uniqueArray([1, 1, 1, 1])).toEqual([1]);
		expect(uniqueArray([1, 1, 2, 2, 3, 3, 5, 6])).toEqual([1, 2, 3, 5, 6]);
	});
});
