import { fillPath } from './string-07-FillPath';
describe('fillPath(path, params)', () => {
	test('should return false when path is not a string and params is not object ', () => {
		expect(fillPath('', {})).toBe(false);
		expect(fillPath([], [])).toBe(false);
		expect(fillPath(0, 0)).toBe(false);
		expect(fillPath('', '')).toBe(false);
		expect(fillPath({}, {})).toBe(false);
		expect(fillPath([], {})).toBe(false);
	});
	test('should return correct string when path is correct and params correct object', () => {
		expect(
			fillPath('/categories/:categoryId/products/:productId', {
				categoryId: 1,
				productId: 2,
			})
		).toBe('/categories/1/products/2');
		expect(
			fillPath('/categories/:categoryId/products/:productId', {
				productId: 2,
			})
		).toBe('/categories/:categoryId/products/2');
	});
});
