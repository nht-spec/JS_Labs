import { getDisplayedAddress } from './string-06-GetDisplayedAddress';
describe(' getDisplayedAddress(address)', () => {
	test('should return false when address is empty or not object', () => {
		expect(getDisplayedAddress([])).toBe(false);
		expect(getDisplayedAddress({})).toBe(false);
		expect(getDisplayedAddress('')).toBe(false);
		expect(getDisplayedAddress(0)).toBe(false);
	});
	test('should return correct when object has a address', () => {
		expect(
			getDisplayedAddress({
				number: 123,
				street: 'Nguyen Cong Tru',
				ward: 'Ward 11',
				district: 'Binh Thanh District',
				city: 'HCMC',
			})
		).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
		expect(
			getDisplayedAddress({
				street: 'Nguyen Cong Tru',
				district: 'Binh Thanh District',
			})
		).toBe('Nguyen Cong Tru, Binh Thanh District');
	});
});
