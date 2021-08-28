import { findFirstIPhone } from './array-find-15-FindFirstIPhone';
describe('findFirstIPhone(productList)', () => {
	it('should return undefined when productList is empty or is not array', () => {
		expect(findFirstIPhone([])).toEqual(undefined);
		expect(findFirstIPhone({})).toEqual(undefined);
		expect(findFirstIPhone('')).toEqual(undefined);
		expect(findFirstIPhone(0)).toEqual(undefined);
	});
	it('should return undefined when productList dont has a iphone name', () => {
		expect(
			findFirstIPhone([
				{ id: 1, name: 'Samsung' },
				{ id: 2, name: 'IPHONsE X' },
				{ id: 3, name: 'iPad 12 Pro' },
			])
		).toEqual(undefined);
		expect(findFirstIPhone([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqual(undefined);
		expect(
			findFirstIPhone([
				{ id: 1, name: 'Samsung' },
				{ id: 3, name: 'iPad 12 Pro' },
			])
		).toEqual(undefined);
	});
	it('should return firt correct value when productList has a iphone name', () => {
		expect(
			findFirstIPhone([
				{ id: 1, name: 'Samsung' },
				{ id: 2, name: 'IPHONE X' },
				{ id: 3, name: 'iPad 12 Pro' },
			])
		).toEqual({ id: 2, name: 'IPHONE X' });
		expect(findFirstIPhone([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqual(undefined);
		expect(
			findFirstIPhone([
				{ id: 1, name: 'Samsung' },
				{ id: 2, name: 'Samsung2' },
				{ id: 3, name: 'iPhone 12 Pro' },
			])
		).toEqual({ id: 3, name: 'iPhone 12 Pro' });
	});
});
