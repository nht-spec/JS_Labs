import { findAllProducts } from './array-filter-08-FindAllProducts';
describe('findAllProducts(productList)', () => {
	it('should return [] when productList is empty or is not array', () => {
		expect(findAllProducts([])).toEqual([]);
		expect(findAllProducts({})).toEqual([]);
		expect(findAllProducts('')).toEqual([]);
		expect(findAllProducts(0)).toEqual([]);
	});
	it('should return [] when productList dont has a freeship', () => {
		expect(
			findAllProducts([
				{ id: 1, name: 'iphone X', isFreeShip: false },
				{ id: 2, name: 'iphone 16 Pro', isFreeShip: false },
				{ id: 3, name: 'iphone 20 Pro', isFreeShip: false },
			])
		).toEqual([]);
		expect(
			findAllProducts([
				{ id: 1, name: 'iphone X' },
				{ id: 2, name: 'iphone 16 Pro' },
				{ id: 3, name: 'iphone 20 Pro' },
			])
		).toEqual([]);
	});
	it('should return correct value when productList has a freeship', () => {
		expect(
			findAllProducts([
				{ id: 1, name: 'iphone X', isFreeShip: true },
				{ id: 2, name: 'iphone 16 Pro', isFreeShip: false },
				{ id: 3, name: 'iphone 20 Pro', isFreeShip: false },
				{ id: 4, name: 'iphone 21 X', isFreeShip: true },
			])
		).toEqual([
			{ id: 1, name: 'iphone X', isFreeShip: true },
			{ id: 4, name: 'iphone 21 X', isFreeShip: true },
		]);
		expect(
			findAllProducts([
				{ id: 1, name: 'iphone X', isFreeShip: true },
				{ id: 2, name: 'iphone 16 Pro' },
				{ id: 3, name: 'iphone 20 Pro', isFreeShip: true },
			])
		).toEqual([
			{ id: 1, name: 'iphone X', isFreeShip: true },
			{ id: 3, name: 'iphone 20 Pro', isFreeShip: true },
		]);
	});
});
