import { insert } from './array-cd-01-Insert';
describe('insert(arr, newItem, k)', () => {
	it('should return [] when arr is empty or is not array, newItem, k is not number', () => {
		expect(insert([], [], [])).toEqual([]);
		expect(insert({}, {}, {})).toEqual([]);
		expect(insert('', '', '')).toEqual([]);
		expect(insert(0, '', '')).toEqual([]);
	});
	it('should return [] when insert is not correct', () => {
		expect(insert([1, 2, 3], 2, 'thinh')).toEqual([]);
		expect(insert([1, 2, 3], 'thinh', -1)).toEqual([]);
		expect(insert([1, 2, 3], '12', '2')).toEqual([]);
		expect(insert(['1', 2, 3], 0, -1)).toEqual([]);
		expect(insert([1, 2, 3], 0, 3)).toEqual([]);
		expect(insert([1, 2, 3], 0, 2)).toEqual([]);
	});
	it('should return correct array when insert is correct', () => {
		expect(insert([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
		expect(insert([1, 2, 3], 4, 10)).toEqual([1, 2, 3, 4]);
		expect(insert([1, 2, 3], 2, 10)).toEqual([1, 2, 3, 2]);
		expect(insert([1, 2, 3], 3, 0)).toEqual([3, 1, 2, 3]);
	});
});
