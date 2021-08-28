export function removeStudentById(studentList, studentId) {
	if (
		!Array.isArray(studentList) ||
		studentList.length === 0 ||
		typeof studentId !== 'number' ||
		studentId < 0
	) {
		return [];
	}
	let checkValue = [];
	studentList.forEach((student) => {
		const { id } = student;
		if (id === undefined) {
			return checkValue;
		}
		if (typeof id === 'number' && id !== studentId) {
			checkValue.push(student);
		}
	});
	return checkValue;
}
