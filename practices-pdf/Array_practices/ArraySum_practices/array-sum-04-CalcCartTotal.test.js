import { calcCartTotal } from './array-sum-04-CalcCartTotal';
describe(' calcCartTotal(cartItemList) ', () => {
	it('should return 0 when cartItemList is empty or is not array', () => {
		expect(calcCartTotal([])).toEqual(0);
		expect(calcCartTotal({})).toEqual(0);
		expect(calcCartTotal('')).toEqual(0);
		expect(calcCartTotal(0)).toEqual(0);
	});
	it('should return 0 when cartItemList dont has quantity or dont has price', () => {
		expect(
			calcCartTotal([
				{ id: 1, product: { id: 1, price: 50000 } },
				{ id: 2, product: { id: 2, price: 100000 } },
			])
		).toEqual(0);
		expect(
			calcCartTotal([
				{ id: 1, product: { id: 1 }, quantity: 1 },
				{ id: 2, product: { id: 2 }, quantity: 2 },
			])
		).toEqual(0);
	});
	it('should return correct value when cartItemList is correct', () => {
		expect(
			calcCartTotal([
				{ id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
				{ id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
			])
		).toEqual(250000);
		expect(
			calcCartTotal([
				{ id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
				{ id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
				{ id: 3, product: { id: 3, price: 100000 }, quantity: 2 },
			])
		).toEqual(450000);
		expect(
			calcCartTotal([
				{ id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
				{ id: 2, product: { id: 2, price: 100000 } },
				{ id: 3, product: { id: 3, price: 100000 }, quantity: 2 },
			])
		).toEqual(250000);
	});
});
