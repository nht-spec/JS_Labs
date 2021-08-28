import {
	hasEvenNumberGreaterThanN,
	hasEvenNumberGreaterThanNv2,
} from './array-check-01-HasEvenNumberGreaterThanN';
describe(' hasEvenNumberGreaterThanN(numberList, n)', () => {
	it('should return false when numberList is not array or empty and n is not a number ', () => {
		expect(hasEvenNumberGreaterThanN([], '')).toBe(false);
		expect(hasEvenNumberGreaterThanN({}, -1)).toBe(false);
		expect(hasEvenNumberGreaterThanN('', {})).toBe(false);
		expect(hasEvenNumberGreaterThanN(0, [])).toBe(false);
	});
	it('should return false when numberList is not a even', () => {
		expect(hasEvenNumberGreaterThanN([1, 3, 5, 7])).toBe(false);
		expect(hasEvenNumberGreaterThanN([9, 11, 13, 15, 17])).toBe(false);
		expect(hasEvenNumberGreaterThanN([101, 103, 105])).toBe(false);
		expect(hasEvenNumberGreaterThanN([421, 431, 501])).toBe(false);
	});
	it('should return false when numberList is event and smaller n', () => {
		expect(hasEvenNumberGreaterThanN([2, 4, 6], 8)).toBe(false);
		expect(hasEvenNumberGreaterThanN([8, 10, 12, 14, 16, 18], 20)).toBe(false);
		expect(hasEvenNumberGreaterThanN([102, 104, 106], 106)).toBe(false);
		expect(hasEvenNumberGreaterThanN([422, 434, 504], 530)).toBe(false);
	});
	it('should return true when numberList is event and bigger n', () => {
		expect(hasEvenNumberGreaterThanN([2, 4, 6], 5)).toBe(true);
		expect(hasEvenNumberGreaterThanN([8, 10, 12, 14, 16, 18], 17)).toBe(true);
		expect(hasEvenNumberGreaterThanN([102, 104, 106], 105)).toBe(true);
		expect(hasEvenNumberGreaterThanN([422, 434, 504], 500)).toBe(true);
	});
});

describe(' hasEvenNumberGreaterThanN(numberList, n)', () => {
	it('should return false when numberList is not array or empty and n is not a number ', () => {
		expect(hasEvenNumberGreaterThanNv2([], '')).toBe(false);
		expect(hasEvenNumberGreaterThanNv2({}, -1)).toBe(false);
		expect(hasEvenNumberGreaterThanNv2('', {})).toBe(false);
		expect(hasEvenNumberGreaterThanNv2(0, [])).toBe(false);
	});
	it('should return false when numberList is not a even', () => {
		expect(hasEvenNumberGreaterThanNv2([1, 3, 5, 7])).toBe(false);
		expect(hasEvenNumberGreaterThanNv2([9, 11, 13, 15, 17])).toBe(false);
		expect(hasEvenNumberGreaterThanNv2([101, 103, 105])).toBe(false);
		expect(hasEvenNumberGreaterThanNv2([421, 431, 501])).toBe(false);
	});
	it('should return false when numberList is event and smaller n', () => {
		expect(hasEvenNumberGreaterThanNv2([2, 4, 6], 8)).toBe(false);
		expect(hasEvenNumberGreaterThanNv2([8, 10, 12, 14, 16, 18], 20)).toBe(false);
		expect(hasEvenNumberGreaterThanNv2([102, 104, 106], 106)).toBe(false);
		expect(hasEvenNumberGreaterThanNv2([422, 434, 504], 530)).toBe(false);
	});
	it('should return true when numberList is event and bigger n', () => {
		expect(hasEvenNumberGreaterThanNv2([2, 4, 6], 5)).toBe(true);
		expect(hasEvenNumberGreaterThanNv2([8, 10, 12, 14, 16, 18], 17)).toBe(true);
		expect(hasEvenNumberGreaterThanNv2([102, 104, 106], 105)).toBe(true);
		expect(hasEvenNumberGreaterThanNv2([422, 434, 504], 500)).toBe(true);
	});
});
