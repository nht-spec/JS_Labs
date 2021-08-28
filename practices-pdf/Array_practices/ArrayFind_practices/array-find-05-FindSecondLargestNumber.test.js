import { findSecondLargestNumber } from './array-find-05-FindSecondLargestNumber';
describe('findSecondLargestNumber(numberList)', () => {
	it('should return undefined when numberList is empty or is not arrray', () => {
		expect(findSecondLargestNumber([])).toBe(undefined);
		expect(findSecondLargestNumber({})).toBe(undefined);
		expect(findSecondLargestNumber('')).toBe(undefined);
		expect(findSecondLargestNumber(0)).toBe(undefined);
	});
	it('should return undefined when numberList has one number', () => {
		expect(findSecondLargestNumber([2])).toBe(undefined);
		expect(findSecondLargestNumber([54])).toBe(undefined);
		expect(findSecondLargestNumber([123])).toBe(undefined);
		expect(findSecondLargestNumber([2323])).toBe(undefined);
	});
	it('should return correct number when numberList is correct', () => {
		expect(findSecondLargestNumber([1, 2])).toBe(1);
		expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3);
		expect(findSecondLargestNumber([1, 2, 4, 5, 3])).toBe(4);
		expect(findSecondLargestNumber([10, 11, 23, 25])).toBe(23);
	});
});
