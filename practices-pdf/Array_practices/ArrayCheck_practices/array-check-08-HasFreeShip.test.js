import { hasFreeShip } from './array-check-08-HasFreeShip';
describe('hasFreeShip(productList, price)', () => {
	it('should return false when productList is empty or not array and price must be a number and > 0', () => {
		expect(hasFreeShip([], -1)).toBe(false);
		expect(hasFreeShip([], 0)).toBe(false);
		expect(hasFreeShip({}, '')).toBe(false);
		expect(hasFreeShip('', {})).toBe(false);
		expect(hasFreeShip(0, [])).toBe(false);
	});
	it('should return false when isFreeShip not correct and price > priceProduct', () => {
		expect(
			hasFreeShip(
				[
					{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
					{ id: 2, name: 'Iphone 16 Pro Max', isFreeShip: false, price: 1500000 },
				],
				10000000
			)
		).toBe(false);
		expect(
			hasFreeShip(
				[
					{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
					{ id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
				],
				-1
			)
		).toBe(false);
	});
	it('should return true when isFreeShip correct and price < priceProduct', () => {
		expect(
			hasFreeShip(
				[
					{ id: 1, name: 'Iphone 16', isFreeShip: true, price: 10200500 },
					{ id: 2, name: 'Iphone 16 Pro Max', isFreeShip: false, price: 1500000 },
				],
				10000000
			)
		).toBe(true);
		expect(
			hasFreeShip(
				[
					{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
					{ id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 25000000 },
				],
				20000000
			)
		).toBe(true);
	});
});
