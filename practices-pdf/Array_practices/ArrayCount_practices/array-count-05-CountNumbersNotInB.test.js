import { countNumbersNotInB } from './array-count-05-CountNumbersNotInB';
describe('countNumbersNotInB(a, b)', () => {
	it('should return 0 when a,b is empty or not array ', () => {
		expect(countNumbersNotInB([], [])).toEqual(0);
		expect(countNumbersNotInB({}, {})).toEqual(0);
		expect(countNumbersNotInB(0, 0)).toEqual(0);
		expect(countNumbersNotInB('', '')).toEqual(0);
	});
	it('should return 0 when array a has number and array b has number to and a,b dont has a number', () => {
		expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toEqual(0);
		expect(countNumbersNotInB([1, 6, 3], [1, 6, 3])).toEqual(0);
		expect(countNumbersNotInB(['1', '12', false], ['', { 1: 'thnh' }, [12]])).toEqual(0);
	});
	it('should return correct number when a,b is correct', () => {
		expect(countNumbersNotInB([1, 2, 3], [4, 5])).toEqual(3);
		expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toEqual(2);
		expect(countNumbersNotInB([1, 2, 3, 4, 5], [2, 3, 4, 5])).toEqual(1);
	});
});
