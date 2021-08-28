import { findLastStudentHavingMinAvg } from './array-find-12-FindLastStudentHavingMinAvg';
describe('findLastStudentHavingMinAvg(studentList)', () => {
	it('should return undefined when studentList is empty or is not array ', () => {
		expect(findLastStudentHavingMinAvg([])).toEqual(undefined);
		expect(findLastStudentHavingMinAvg({})).toEqual(undefined);
		expect(findLastStudentHavingMinAvg(0)).toEqual(undefined);
		expect(findLastStudentHavingMinAvg('')).toEqual(undefined);
	});
	it('should return undefined when point of student > 10 or one colum point', () => {
		expect(
			findLastStudentHavingMinAvg([
				{ id: 1, name: 'Alice', math: 11, english: 9 },
				{ id: 2, name: 'Bob', math: 5, english: 11 },
				{ id: 3, name: 'John', math: 11, english: 5 },
			])
		).toEqual(undefined);
		expect(
			findLastStudentHavingMinAvg([
				{ id: 1, name: 'Alice', english: 9 },
				{ id: 2, name: 'Bob', math: 5 },
				{ id: 3, name: 'John', english: 5 },
			])
		).toEqual(undefined);
	});
	it('should return correct number when studentList is correct', () => {
		expect(
			findLastStudentHavingMinAvg([
				{ id: 1, name: 'Alice', math: 9, english: 9 },
				{ id: 2, name: 'Bob', math: 5, english: 5 },
				{ id: 3, name: 'John', math: 5, english: 5 },
			])
		).toEqual({ id: 3, name: 'John', math: 5, english: 5 });
		expect(
			findLastStudentHavingMinAvg([
				{ id: 1, name: 'Alice', math: 9, english: 9 },
				{ id: 2, name: 'Bob', math: 5, english: 5 },
				{ id: 3, name: 'Bob', math: 5, english: 5 },
				{ id: 4, name: 'John', math: 6, english: 5 },
			])
		).toEqual({ id: 3, name: 'Bob', math: 5, english: 5 });
	});
});
