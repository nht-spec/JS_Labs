import { findStudentHavingHighestMark } from './array-find-11-FindStudentHavingHighestMark';
describe('findStudentHavingHighestMark(studentList)', () => {
	it('should return undefined when studentList is empty or is not array', () => {
		expect(findStudentHavingHighestMark([])).toBe(undefined);
		expect(findStudentHavingHighestMark({})).toBe(undefined);
		expect(findStudentHavingHighestMark('')).toBe(undefined);
		expect(findStudentHavingHighestMark(0)).toBe(undefined);
	});
	it('should return undefined when studentList dont has math', () => {
		expect(
			findStudentHavingHighestMark([
				{ id: 1, name: 'Alice' },
				{ id: 2, name: 'Bob' },
				{ id: 3, name: 'John', math: 11 },
			])
		).toBe(undefined);
		expect(
			findStudentHavingHighestMark([
				{ id: 1, name: 'Alice' },
				{ id: 2, name: 'Bob' },
				{ id: 3 },
			])
		).toBe(undefined);
	});
	it('should return correct when studentList is correct', () => {
		expect(
			findStudentHavingHighestMark([
				{ id: 1, name: 'Alice', math: 9 },
				{ id: 2, name: 'Bob', math: 10 },
				{ id: 3, name: 'John', math: 10 },
			])
		).toEqual({ id: 2, name: 'Bob', math: 10 });
	});
	it('should return correct when studentList is correct', () => {
		expect(
			findStudentHavingHighestMark([
				{ id: 1, name: 'Alice', math: 9 },
				{ id: 2, name: 'Bob', math: 8 },
				{ id: 3, name: 'John', math: 7 },
				{ id: 3, name: 'thinh', math: 10 },
				{ id: 3, name: 'John2', math: 9 },
			])
		).toEqual({ id: 3, name: 'thinh', math: 10 });
	});
});
