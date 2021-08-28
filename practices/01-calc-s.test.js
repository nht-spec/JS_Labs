import { calculateSum } from './01-calc-s';
import { calculateSum2 } from './01-calc-s';

describe('s(n)=1 +2 + .. +n', () => {
	test('should  return 0 when n <=0', () => {
		expect(calculateSum(-1)).toBe(0);
		expect(calculateSum(0)).toBe(0);
	});
	test('should  return 0 when n >0', () => {
		expect(calculateSum(1)).toBe(1);
		expect(calculateSum(2)).toBe(3);
		expect(calculateSum(3)).toBe(6);
		expect(calculateSum(10)).toBe(55);
	});
});

describe('s(n)=1 +2 + .. +n', () => {
	test('should  return 0 when n <=0', () => {
		expect(calculateSum2(-1)).toBe(0);
		expect(calculateSum2(0)).toBe(0);
	});
	test('should  return 0 when n >0', () => {
		expect(calculateSum2(1)).toBe(1);
		expect(calculateSum2(2)).toBe(3);
		expect(calculateSum2(3)).toBe(6);
		expect(calculateSum2(10)).toBe(55);
	});
});
