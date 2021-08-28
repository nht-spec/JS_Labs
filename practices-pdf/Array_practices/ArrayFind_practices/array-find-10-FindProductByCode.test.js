import { findProductByCode } from './array-find-10-FindProductByCode';
describe('findProductByCode(productList, code)', () => {
	it('should return -1 when productList is empty or is not array and code is not string', () => {
		expect(findProductByCode([], 0)).toBe(-1);
		expect(findProductByCode({}, {})).toBe(-1);
		expect(findProductByCode('', [])).toBe(-1);
		expect(findProductByCode([], [])).toBe(-1);
		expect(findProductByCode(0, 0)).toBe(-1);
	});
	it('should return -1 when productList is not correct', () => {
		expect(
			findProductByCode(
				[
					{ id: 1, code: 'ip01', name: 'IPhone 16' },
					{ id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
				],
				'ip05'
			)
		).toBe(-1);
		expect(
			findProductByCode(
				[
					{ id: 1, code: 'ip01', name: 'IPhone 16' },
					{ id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
				],
				0
			)
		).toBe(-1);
		expect(
			findProductByCode(
				[
					{ id: 1, code: 'ip01', name: 'IPhone 16' },
					{ id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
				],
				'i'
			)
		).toBe(-1);
	});
	it('should return index when productList is correct', () => {
		expect(
			findProductByCode(
				[
					{ id: 1, code: 'ip01', name: 'IPhone 16' },
					{ id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
				],
				'ip01'
			)
		).toBe(0);
		expect(
			findProductByCode(
				[
					{ id: 1, code: 'ip01', name: 'IPhone 16' },
					{ id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
				],
				'ip02'
			)
		).toBe(1);
		expect(
			findProductByCode(
				[
					{ id: 1, code: 'ip01', name: 'IPhone 16' },
					{ id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
					{ id: 3, code: 'ip', name: 'IPhone 16' },
					{ id: 4, code: 'ip2', name: 'IPhone 16 Promax' },
				],
				'ip2'
			)
		).toBe(3);
	});
});
