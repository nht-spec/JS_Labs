import { remove } from './array-cd-02-Remove';
describe(' remove(arr, k, n)', () => {
	it('should return [] when arr is empty or is not array and k,n is not number', () => {
		expect(remove([], [], [])).toEqual([]);
		expect(remove({}, {}, {})).toEqual([]);
		expect(remove('', '', '')).toEqual([]);
		expect(remove(0, {}, {})).toEqual([]);
	});
	it('should return [] when remove is not correct value', () => {
		expect(remove(['thinh', 12, { key: 1 }, [12]], 2, 1)).toEqual([]);
		expect(remove([1, 2, 3], 0)).toEqual([]);
		expect(remove([1, 2, 3], 'th')).toEqual([]);
		expect(remove([1, 2, 3], 'th', ['as'])).toEqual([]);
	});
	it('should return correct value when remove is correct', () => {
		expect(remove([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
		expect(remove([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
		expect(remove([1, 2, 3], 1, 2)).toEqual([1]);
		expect(remove([1, 2, 3, 4], 1, 2)).toEqual([1, 4]);
		expect(remove([1, 2, 3, 4, 6, 9], 1, 3)).toEqual([1, 6, 9]);
	});
});
