import { findProductHavingFreeShip } from './array-find-14-FindProductHavingFreeShip';
describe('findProductHavingFreeShip(productList)', () => {
	it('should return undefined when productList is empty or is not array', () => {
		expect(findProductHavingFreeShip({})).toEqual(undefined);
		expect(findProductHavingFreeShip([])).toEqual(undefined);
		expect(findProductHavingFreeShip(0)).toEqual(undefined);
		expect(findProductHavingFreeShip('')).toEqual(undefined);
	});
	it('should return undefined when productList is not correct', () => {
		expect(
			findProductHavingFreeShip([
				{ id: 1, name: 'IPhone 5', isFreeShip: false },
				{ id: 2, name: 'IPhone X', isFreeShip: false },
				{ id: 3, name: 'IPhone 12 Pro', isFreeShip: false },
			])
		).toEqual(undefined);
		expect(
			findProductHavingFreeShip([
				{ id: 1, name: 'IPhone 5' },
				{ id: 2, name: 'IPhone X' },
				{ id: 3, name: 'IPhone 12 Pro', isFreeShip: false },
			])
		).toEqual(undefined);
		expect(
			findProductHavingFreeShip([
				{ id: 1, name: 'IPhone 5' },
				{ id: 2, name: 'IPhone X' },
				{ id: 3, name: 'IPhone 12 Pro' },
			])
		).toEqual(undefined);
	});
	it('should return correct value when productList is correct', () => {
		expect(
			findProductHavingFreeShip([
				{ id: 1, name: 'IPhone 5', isFreeShip: false },
				{ id: 2, name: 'IPhone X', isFreeShip: true },
				{ id: 3, name: 'IPhone 12 Pro', isFreeShip: false },
			])
		).toEqual({ id: 2, name: 'IPhone X', isFreeShip: true });
		expect(
			findProductHavingFreeShip([
				{ id: 1, name: 'IPhone 5' },
				{ id: 2, name: 'IPhone X' },
				{ id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
			])
		).toEqual({ id: 3, name: 'IPhone 12 Pro', isFreeShip: true });
		expect(
			findProductHavingFreeShip([
				{ id: 1, name: 'IPhone 5', isFreeShip: true },
				{ id: 2, name: 'IPhone X', isFreeShip: false },
				{ id: 3, name: 'IPhone 12 Pro', isFreeShip: false },
			])
		).toEqual({ id: 1, name: 'IPhone 5', isFreeShip: true });
	});
});
