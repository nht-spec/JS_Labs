import { insert } from './array-cd-04-Insert';
describe(' insert(numberList, newNumber)', () => {
	it('should return [] when numberList is empty or is not array and newNumber is not number', () => {
		expect(insert([], [])).toEqual([]);
		expect(insert({}, {})).toEqual([]);
		expect(insert('', '')).toEqual([]);
		expect(insert(0, [])).toEqual([]);
	});
	it('should return [] when numberList is not correct', () => {
		expect(insert([1, 2], '123')).toEqual([]);
		expect(insert([1, 2], { thinh: 't' })).toEqual([]);
		expect(insert([1, '12'], [1])).toEqual([]);
	});
	it('should return correct when numberList is correct', () => {
		expect(insert([], 3)).toEqual([3]);
		expect(insert([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
		expect(insert([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
	});
});
