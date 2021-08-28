import { traverse } from '@babel/core';
import { hasAlice, hasAlice2, hasAlice3, hasAlice4, hasAlice5 } from './array-check-07';

describe('hasAlice(studentList)', () => {
	it('should return false when empty array', () => {
		expect(hasAlice([])).toBe(false);
	});
	it('should return false for array doesnt have alice', () => {
		const studentList = [
			{ id: 1, name: 'Bob', gender: 'male' },
			{ id: 2, name: 'Alice', gender: 'male' },
		];
		expect(hasAlice(studentList)).toBe(false);
	});
	it('should return true for array has Alice', () => {
		const studentList = [
			{ id: 1, name: 'Alice', gender: 'female' },
			{ id: 2, name: 'Easy Frontend', gender: 'male' },
		];
		expect(hasAlice(studentList)).toBe(true);
	});
});

describe('hasAlice(studentList)', () => {
	it('should return false when empty array', () => {
		expect(hasAlice2([])).toBe(false);
	});
	it('should return false for array doesnt have alice', () => {
		const studentList = [
			{ id: 1, name: 'Bob', gender: 'male' },
			{ id: 2, name: 'Alice', gender: 'male' },
		];
		expect(hasAlice2(studentList)).toBe(false);
	});
	it('should return true for array has Alice', () => {
		const studentList = [
			{ id: 1, name: 'Alice', gender: 'female' },
			{ id: 2, name: 'Easy Frontend', gender: 'male' },
		];
		expect(hasAlice2(studentList)).toBe(true);
	});
});

describe('hasAlice(studentList)', () => {
	it('should return false when empty array', () => {
		expect(hasAlice3([])).toBe(false);
	});
	it('should return false for array doesnt have alice', () => {
		const studentList = [
			{ id: 1, name: 'Bob', gender: 'male' },
			{ id: 2, name: 'Alice', gender: 'male' },
		];
		expect(hasAlice3(studentList)).toBe(false);
	});
	it('should return true for array has Alice', () => {
		const studentList = [
			{ id: 1, name: 'Alice', gender: 'female' },
			{ id: 2, name: 'Easy Frontend', gender: 'male' },
		];
		expect(hasAlice3(studentList)).toBe(true);
	});
});

describe('hasAlice(studentList)', () => {
	it('should return false when empty array', () => {
		expect(hasAlice4([])).toBe(false);
	});
	it('should return false for array doesnt have alice', () => {
		const studentList = [
			{ id: 1, name: 'Bob', gender: 'male' },
			{ id: 2, name: 'Alice', gender: 'male' },
		];
		expect(hasAlice4(studentList)).toBe(false);
	});
	it('should return true for array has Alice', () => {
		const studentList = [
			{ id: 1, name: 'Alice', gender: 'female' },
			{ id: 2, name: 'Easy Frontend', gender: 'male' },
		];
		expect(hasAlice4(studentList)).toBe(true);
	});
});

describe('hasAlice(studentList)', () => {
	it('should return false when empty array', () => {
		expect(hasAlice5([])).toBe(false);
	});
	it('should return false for array doesnt have alice', () => {
		const studentList = [
			{ id: 1, name: 'Bob', gender: 'male' },
			{ id: 2, name: 'Alice', gender: 'male' },
		];
		expect(hasAlice5(studentList)).toBe(false);
	});
	it('should return true for array has Alice', () => {
		const studentList = [
			{ id: 1, name: 'Alice', gender: 'female' },
			{ id: 2, name: 'Easy Frontend', gender: 'male' },
		];
		expect(hasAlice5(studentList)).toBe(true);
	});
});
