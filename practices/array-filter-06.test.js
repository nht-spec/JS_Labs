import { findAllNumber, findAllNumber2, findAllNumber3 } from './array-filter-06';
describe('findALLNumber(numberList)', () => {
	it('should return empty array if list is empty ', () => {
		expect(findAllNumber([])).toEqual([]);
		expect(findAllNumber()).toEqual([]);
		expect(findAllNumber({})).toEqual([]);
		expect(findAllNumber('')).toEqual([]);
		expect(findAllNumber(true)).toEqual([]);
	});
	it('should return empty array if list has no number starts with odd digit', () => {
		expect(findAllNumber([2, 423, 6234, 21232])).toEqual([]);
	});
	it('should return correct array if list has number starts with odd digit', () => {
		expect(findAllNumber([2, 42, 123, -56, 789012])).toEqual([123, -56, 789012]);
	});
});

describe('findALLNumber(numberList)', () => {
	it('should return empty array if list is empty ', () => {
		expect(findAllNumber2([])).toEqual([]);
		expect(findAllNumber2()).toEqual([]);
		expect(findAllNumber2({})).toEqual([]);
		expect(findAllNumber2('')).toEqual([]);
		expect(findAllNumber2(true)).toEqual([]);
	});
	it('should return empty array if list has no number starts with odd digit', () => {
		expect(findAllNumber2([2, 423, 6234, 21232])).toEqual([]);
	});
	it('should return correct array if list has number starts with odd digit', () => {
		expect(findAllNumber2([2, 42, 123, -56, 789012])).toEqual([123, -56, 789012]);
	});
});

describe('findALLNumber(numberList)', () => {
	it('should return empty array if list is empty ', () => {
		expect(findAllNumber3([])).toEqual([]);
		expect(findAllNumber3()).toEqual([]);
		expect(findAllNumber3({})).toEqual([]);
		expect(findAllNumber3('')).toEqual([]);
		expect(findAllNumber3(true)).toEqual([]);
	});
	it('should return empty array if list has no number starts with odd digit', () => {
		expect(findAllNumber3([2, 423, 6234, 21232])).toEqual([]);
	});
	it('should return correct array if list has number starts with odd digit', () => {
		expect(findAllNumber3([2, 42, 123, -56, 789012])).toEqual([123, -56, 789012]);
	});
});
