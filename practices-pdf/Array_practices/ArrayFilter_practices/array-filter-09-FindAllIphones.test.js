import { findAllIphones } from './array-filter-09-FindAllIphones';
describe('findAllIphones(productList)', () => {
	it('should return [] when productList is empty or is not array', () => {
		expect(findAllIphones([])).toEqual([]);
		expect(findAllIphones({})).toEqual([]);
		expect(findAllIphones('')).toEqual([]);
		expect(findAllIphones(0)).toEqual([]);
	});
	it('should return [] when productList is wrong', () => {
		expect(
			findAllIphones([
				{ id: 1, name: 'Luxury  X', amount: 1 },
				{ id: 2, name: 'Super Cool iph 16 Pro', amount: 3 },
				{ id: 3, name: 'iphon 20 Pro', amount: 2 },
			])
		).toEqual([]);
		expect(
			findAllIphones([
				{ id: 1, name: 'Luxury IPhone X', amount: 0 },
				{ id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
				{ id: 3, name: 'iphone 20 Pro', amount: 0 },
			])
		).toEqual([]);
	});
	it('should return correct value when productList is correct', () => {
		expect(
			findAllIphones([
				{ id: 1, name: 'Luxury iphone  X', amount: 1 },
				{ id: 2, name: 'Super Cool iph 16 Pro', amount: 3 },
				{ id: 3, name: 'iphon 20 Pro', amount: 2 },
			])
		).toEqual([{ id: 1, name: 'Luxury iphone  X', amount: 1 }]);
		expect(
			findAllIphones([
				{ id: 1, name: 'Luxury iphone  X', amount: 1 },
				{ id: 2, name: 'Super Cool iphONE 16 Pro', amount: 3 },
				{ id: 3, name: 'IPHONE 20 Pro', amount: 2 },
			])
		).toEqual([
			{ id: 1, name: 'Luxury iphone  X', amount: 1 },
			{ id: 2, name: 'Super Cool iphONE 16 Pro', amount: 3 },
			{ id: 3, name: 'IPHONE 20 Pro', amount: 2 },
		]);
	});
});
