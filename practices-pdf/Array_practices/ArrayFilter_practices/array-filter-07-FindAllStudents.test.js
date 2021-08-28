import { findAllStudents } from './array-filter-07-FindAllStudents';
describe('findAllStudents(studentList)', () => {
	it('should return [] when studentList is empty or is not array', () => {
		expect(findAllStudents([])).toEqual([]);
		expect(findAllStudents({})).toEqual([]);
		expect(findAllStudents('')).toEqual([]);
		expect(findAllStudents(0)).toEqual([]);
	});
	it('should return [] when studentList dont has a marks < 5', () => {
		expect(
			findAllStudents([
				{ id: 1, name: 'Alice', math: 9 },
				{ id: 2, name: 'Bob', math: 5 },
				{ id: 3, name: 'John', math: 6 },
			])
		).toEqual([]);
		expect(
			findAllStudents([
				{ id: 1, name: 'Alice' },
				{ id: 2, name: 'Bob' },
				{ id: 3, name: 'John' },
			])
		).toEqual([]);
	});
	it('should return correct value when studentList has a marks < 5', () => {
		expect(
			findAllStudents([
				{ id: 1, name: 'Alice', math: 1 },
				{ id: 2, name: 'Bob', math: 5 },
				{ id: 3, name: 'John', math: 6 },
			])
		).toEqual([{ id: 1, name: 'Alice', math: 1 }]);
		expect(
			findAllStudents([
				{ id: 1, name: 'Alice', math: 9 },
				{ id: 2, name: 'Bob', math: 4 },
				{ id: 3, name: 'John', math: 0 },
			])
		).toEqual([
			{ id: 2, name: 'Bob', math: 4 },
			{ id: 3, name: 'John', math: 0 },
		]);
		expect(
			findAllStudents([
				{ id: 1, name: 'Bob', math: 4 },
				{ id: 2, name: 'Alice', math: 9 },
				{ id: 3, name: 'John', math: 0 },
				{ id: 4, name: 'John', math: 3 },
			])
		).toEqual([
			{ id: 1, name: 'Bob', math: 4 },
			{ id: 3, name: 'John', math: 0 },
			{ id: 4, name: 'John', math: 3 },
		]);
	});
});
