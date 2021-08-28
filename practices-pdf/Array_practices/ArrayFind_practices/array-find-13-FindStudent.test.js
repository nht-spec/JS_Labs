import { findStudent } from './array-find-13-FindStudent';
describe('findStudent(studentList)', () => {
	it('should return undefined when studentList is empty or not array', () => {
		expect(findStudent({})).toEqual(undefined);
		expect(findStudent({})).toEqual(undefined);
		expect(findStudent(0)).toEqual(undefined);
		expect(findStudent('')).toEqual(undefined);
	});
	it('should return undefined when studentList is empty or not array', () => {
		expect(
			findStudent([
				{ id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 10 } },
				{ id: 2, name: 'Bob', marks: { math: 6, english: 7, programming: 9 } },
				{ id: 3, name: 'John', marks: { math: 5, english: 5, programming: 9 } },
			])
		).toEqual(undefined);
	});
	it('should return correct number when studentList correct', () => {
		expect(
			findStudent([
				{ id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
				{ id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
				{ id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
				{ id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
			])
		).toEqual({ id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } });
		expect(
			findStudent([
				{ id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
				{ id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
				{ id: 3, name: 'John', marks: { math: 5, english: 7, programming: 9 } },
				{ id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
			])
		).toEqual({ id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } });
	});
});
